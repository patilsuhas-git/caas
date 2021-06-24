package com.example.caas.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/")
public class FrontEndResource {
    @RequestMapping(value = "/loadFile", method= RequestMethod.POST, consumes="application/json")
    public ResponseEntity<String> doLoadFile(@RequestBody String request) {
        System.out.println("This is the request coming in ====" + request);
        return new ResponseEntity<String>("Hello there !", HttpStatus.OK);
    }
}
