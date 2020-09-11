const fs =require('fs');
var buf=fs.readFileSync('/path/to/fs.html')
var str=buf.toString()
console.log(str)
const tv =str.split('\n').length()
console.log(tv)
