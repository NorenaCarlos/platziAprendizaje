const http = require("http");

http.createServer(function(request,response){
  console.log("Nueva peticion");
  console.log(request.url);
  
  response.writeHead(201,{'Content-Type':'text/plain'});
  response.write("Hola ya se usar http desde node JS");
  response.end();
}).listen(62299);
console.log("Escuchando http en el puerto 62299");