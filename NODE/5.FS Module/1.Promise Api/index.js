import * as fs from 'fs/promises'

//create the director /folder
try {
    await fs.mkdir('c:\\node\\base\\index\\tools',{recursive:true})
    console.log('folder created in c drive')
} catch (error) {
    console.log(error)
}

// read the folder

try {
    const files =await fs.readdir('c:\\node\\base\\index\\tools',{recursive:true})
    for(const file of files){
        console.log(file)
    }
} catch (error) {
    console.log(error)
}

//read file
try {
    //read file
    const data = await fs.readFile('readme.md','utf-8')
    //append the content in file
    await fs.appendFile('readme.md','node js is the best')
    //copy file one to another
    await fs.copyFile('readme.md','info.text')
    console.log(data)
} catch (error) {
    console.log(error)
}


