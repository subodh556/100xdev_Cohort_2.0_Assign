// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. 
const fs=require("fs");
fs.writeFile("D:/Documents/Cohort 2.0/week-2/data.txt","HELLO WORLD","utf8",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("created file successfully");
});
fs.readFile(
    "D:/Documents/Cohort 2.0/week-2/data.txt",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    }
  );

