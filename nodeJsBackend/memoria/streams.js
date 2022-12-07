const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readablestream = fs.createReadStream(__dirname+"/input.txt");

readablestream.setEncoding("utf8");
// readablestream.on('data', function(chunk){
//   data += chunk;
// });
// readablestream.on('end',function(){
//   console.log(data);
// })

// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

const transform = stream.Transform;

function Mayus() {
  transform.call(this);
}

util.inherits(Mayus,transform);

Mayus.prototype._transform=function(chunk,codif,cb){
  chunkMayus=chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
}

let mayus = new Mayus();
readablestream
  .pipe(mayus)
  .pipe(process.stdout);