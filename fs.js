let filesys= require("fs");
let content1= filesys.readFileSync("f1.txt");

console.log("content is"+ content1);
// writefilesync karne se nya file banta agar abc.txt nhi hai to 
// agar abc.txt hai pehle se to update hota content bs
filesys.writeFileSync("abc.txt"," abe rudra sunn");
// 
filesys.appendFileSync("abc.txt", " sunn rha chutiye");

filesys.unlinkSync("abc.txt");
console.log("file removed");

// ye saare read write append sab methods hain "fs "module ke
//filesys.writefilesync("abc.txt" , "abe sunn")//ye  "," karne se buffer mein data aati 
// par "+" ye karne se txt mein convert hokr concatinate ho jaati


let path= require("path");
let fs= require("fs");

let inputarray= process.argv.slice(2);
console.log(inputarray);
let filename= inputarray[0];
let content= inputarray.slice(1);
console.log(content);

//current path of directory
let currentpath= process.cwd();
console.log("currentpath is", currentpath);

//make new path using join operations 

let joinedpath= path.join(currentpath,"abc","def");
console.log("joinedpath is", joinedpath);

//you made a path only just like bacche ka naam socha baccha hua nhi abhi
let nyapath= path.join(currentpath, "eknumberfile", "pehla");

//fs.writeFileSync(nyapath," hello system");
//console.log(fs.readFileSync(nyapath));

fs.mkdirSync("web dev");
let eon= fs.existsSync("fs1.js");
console.log(eon);