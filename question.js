let fs= require("fs");
let path= require("path");

let inputarray= process.argv.slice(2);
let mainDir= inputarray[0];
let cwd= process.cwd();

let mainDirPath= path.join(cwd, mainDir);
let doesexistmainDirPath= fs.existsSync(mainDirPath);

if(doesexistmainDirPath){
    console.log("Directory is already created");
    return ;
}else{
    console.log(mainDir, "created");
    fs.mkdirSync(mainDirPath);
    let labelnamefrominarr= inputarray.slice(1,4);

    for(let i=0;i<labelnamefrominarr.length;i++){
        let subpath= path.join(mainDirPath, labelnamefrominarr[i]);

        console.log(labelnamefrominarr[i], "created");
        fs.mkdirSync(subpath);

        for(let j=1;j<=5;j++){
            let modulepath= path.join(subpath,"Module"+j);
            fs.mkdirSync(modulepath);

            console.log("Module"+j, "created inside", labelnamefrominarr[i]);
            let filepath= path.join(modulepath, "content.md");
            fs.writeFileSync(filepath, "# Hello");
        }
    }
}