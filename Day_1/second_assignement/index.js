const  fs =  require('fs')




const abc = fs.mkdirSync(`../we/file`,{recursive:true})

console.log(abc);

const write =(str)=>{
    fs.writeFileSync(`../we/file/text.txt`,`${str}`);
    return str
} 

// write("hello my name is Ujjwal");



const read =()=>{

  return fs.readFileSync(`../we/file/text.txt`, {encoding:'utf-8'});
}

// console.log(read());


const renameFile =(oldName,newName)=>{

    fs.renameSync(`../we/file/${oldName}.txt`,`../we/file/${newName}.txt`)
    return newName;

}

// console.log(renameFile("text","text2"));


const append  =(fileName,data)=>{

    const fd = fs.openSync(`../we/file/${fileName}`,"a" );

    fs.appendFileSync(fd, data);

    return fs.closeSync(fd);


}

// console.log(append("text2.txt","adkksd"));




const deleteFile = (fileName)=>{
    
    return  fs.rmSync(`../we/file/${fileName}`)
}

deleteFile("text2.txt");