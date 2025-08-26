const path=require('node:path');

const a=path.basename('C:\\temp\\myfile.html');
console.log(a)

const a2=path.dirname('C:\\temp\\myfile.html');
console.log(a2)

const a3=path.extname(__filename)
console.log(a3);

console.log(__filename,a3)



const a4=path.win32.basename('C:\\foo.html', '.html');
console.log(a4)
