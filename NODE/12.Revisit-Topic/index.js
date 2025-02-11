//writeFile

const fs = require('fs');
//writefile
fs.writeFile('hey.txt','hi ,welcome ',(err)=>{
    if(err) console.log(err)
    else console.log('Done')
})

//appendfile
fs.appendFile('hey.txt',' oh thank you so much',(err)=>{
    if(err) console.log(err)
    else console.log('Done')
})

//rename
fs.rename('hey.txt','hello.txt',(err)=>{
    if(err) console.log(err)
        else console.log('Done')
})

//copyfile

fs.copyFile('hello.txt','./copy/hello.txt',(err)=>{
    if(err) console.log(err)
        else console.log('Done')
})

//unlink ->removes file

fs.unlink('hello.txt',(err)=>{
    if(err) console.log(err)
        else console.log('Done')  
})

//remove folder 
fs.rmdir('./copy',{recursive:true},(err)=>{
    if(err) console.log(err)
        else console.log('Done')
})