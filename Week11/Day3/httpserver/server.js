const http = require("http");

const server = http.createServer((request, response) => {
    //send response
    let users = [
        {name:'John', age: 401},
        {name:'anne', age: 123},
        {name:'rami', age: 34}
    ]
    response.end(JSON.stringify(users));
    // response.end("Hello Ramiro, from my http server")
});

server.listen(3002);
 
//if we make any change on the msgs we need obligatoriety restart the server or to use nodemon that does the work for us.