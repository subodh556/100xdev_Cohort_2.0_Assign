// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

//length
function getlengthofstring(str){
    console.log("Initial String:",str);
    console.log("the length of string is:",str.length);
}
getlengthofstring("subodh");

//indexOf
function indexOfstr(str,ele){
    console.log("Index of given ele is:",str.indexOf(ele));
}
indexOfstr("hi ram","ram");

//lastIndexOf 
function findLastIndexOfstr(str, ele) {
    
    console.log("Index:", str.lastIndexOf(ele));
  }
  findLastIndexOfstr("Hello World World", "World");
  
  // slice
  function getSlice(str, start, end) {
    
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);
  
  // substring
  function getSubstring(str, start, end) {
    
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);
  
  // replace
  function replaceString(str, target, replacement) {
    
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split
  function splitString(str, separator) {
    
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim
  function trimString(str) {
    
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
