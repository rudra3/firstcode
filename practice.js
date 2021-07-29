let fs= require("fs");
let path= require("path");

let inputarray= process.argv.slice(2);
let mainDir= inputarray[0];

let currpath= process.cwd();
let mainDirPath= path.join(currpath, maindirp);

let find= fs.existsSync(mainDirPath);
if(find){
 console.log("directory already exist");
 return;
}else{
 console.log(mainDir, "created");
 fs.mkdirSync(mainDirPath);

 let subfolderarr= inputarray.slice(1,4);
 for(let i=0;i<subfolderarr.length;i++){

    let subpath= path.join(mainDirPath, subfolderarr[i]);
    if(i==0){
        let wifepath= path.join(subpath, "wife.name");
        fs.writeFileSync(wifepath, "wife name sudha");
    }
 }
}