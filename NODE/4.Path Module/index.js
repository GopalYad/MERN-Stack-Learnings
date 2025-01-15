import path from 'path'
console.log(path.basename('c:\\node\\index.js'))  //output :  index.js

console.log(path.basename('c:\\node\\index.html','.html'))  //output : index

 
console.log(path.dirname('c:\\node\\source\\index.html'))  //output ;c:\node\source

console.log(path.extname('c:\\node\\sourece\\index.js'))  //output : .js


console.log(path.join('c:','html','ccss'))  //output :  c:\html\ccss


console.log(path.join('c:','html','ccss','..'))  //output : c:\html

console.log(path.normalize('c:///html///css///js//tools'))  //output : c:\html\css\js\tools


