var t=process.argv;
var sum = 0;
for (let index = 2; index < t.length; index++) {
    sum = sum + parseInt(t[index])
    
}
console.log(sum)