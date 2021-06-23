FROM node:12.14.1-alpine

WORKDIR /usr/src/caas-frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]