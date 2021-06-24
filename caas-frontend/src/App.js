import React, { useState } from "react";
import axios from 'axios';
const io = require("socket.io-client");
// replace the secret in production to be a different value
const CORS_APP_SECRET = process.env.CORS_APP_SECRET || 'abcd1234123';

var CAAS_BACKEND_URL = process.env.CAAS_BACKEND_URL || 'http://localhost:8080';
var SOCKET_BACKEND_URL = process.env.SOCKET_BACKEND_URL || 'http://localhost:8081';

function App() {

  // declare a new state variable called 'fileSelectedForUpload
  const [fileSelectedForUpload, setFileSelectedForUpload] = useState(null);

  // start socket
  var socket = io(SOCKET_BACKEND_URL, {
    withCredentials: true,
    extraHeaders: {
      'x-custom-auth': CORS_APP_SECRET
    }
  });

  socket.on('specialEventResponse', (msg) => {
    console.log("Received response from socket server: " + msg);
  });

  const submitForm = (event) => {
    // this is needed otherwise Chrome cancels the requests preflight
    // Further reading: https://stackoverflow.com/questions/12009423/what-does-status-canceled-for-a-resource-mean-in-chrome-developer-tools#13459106
    //                  https://github.com/axios/axios/issues/1428
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", "htmldata");
    formData.append("file", fileSelectedForUpload);

    console.log("Calling file upload handler!");
    axios.post(CAAS_BACKEND_URL, formData)
         .then((res) => {
           alert("File upload was successful!");
           console.log("File upload completed!!");
         })
         .catch(err => {
           if (!err.response) {
             // network issue -> most likely the downstream service is not running
             alert("Please check if the backend service is running!");
             console.error("File upload has failed!");
           } else {
             alert("File upload has failed!");
             console.error("File upload has failed!");
           }
         });
    console.log("File upload handler completed!");
    socket.emit("specialEvent", "User has uploaded file!");
  };

  return (
    <div className="App">
      <form>
        <h2>Select HTML file:</h2>
        <input
          type="file"
          // value={fileSelectedForUpload}
          onChange={(e) => setFileSelectedForUpload(e.target.files[0])}
        />
        <button onClick={submitForm}>Upload</button>
      </form>
    </div>
  );
}

export default App;


