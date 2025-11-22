const fs = require('fs');
fs.writeFileSync('./output/temp.txt', 'this is a temp file');
console.log('temp file created');

if(fs.existsSync('./output/temp.txt')){
    console.log('file exist!!!');

    fs.unlinkSync('./output/temp.txt')
    console.log('file deleted...')
}

try {
    fs.unlinkSync('./output/temp.txt')
    
} catch (error) {
    console.log('ERROR :', error.message)
    
}

fs.writeFile('./output/temp2.txt', 'Another temp file', (error)=>{
    if(error) return console.log(error.message)

    console.log('another temp file created')
    
    fs.unlink('./output/temp2.txt', (err)=>{
        if(err){
            console.error('Error :', error.message)

        }else{
            console.log('Temp2 deleted')
        }
    })
})