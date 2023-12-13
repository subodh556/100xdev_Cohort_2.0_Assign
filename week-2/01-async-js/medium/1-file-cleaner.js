// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs=require("fs");
fs.readFile("D:/Documents/Cohort 2.0/week-2/data.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    const d=data.replace(/\s+/g, " ").trim();
    console.log(d);
    fs.writeFile("D:/Documents/Cohort 2.0/week-2/data.txt",d,"utf8",(err)=>{
        if(err){
            console.log("Error in writing file");
            return;
        }
        console.log("file manipulated");
    })
})