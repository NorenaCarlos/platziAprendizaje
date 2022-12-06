const os = require('os');

//console.log(os.arch());
//console.log(os.platform());
//console.log(os.cpus().length);
//console.log(os.constants);
//console.log(os.freemem());
const SIZE=1024;
function kB(bytes){return bytes/SIZE;}
function MB(bytes){return kB(bytes)/SIZE;}
function GB(bytes){return MB(bytes)/SIZE;}

// console.log(os.freemem());
// console.log(kB(os.freemem));
// console.log(MB(os.freemem));
// console.log(GB(os.freemem));
console.log(GB(os.totalmem));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());
// console.log(os.networkInterfaces());