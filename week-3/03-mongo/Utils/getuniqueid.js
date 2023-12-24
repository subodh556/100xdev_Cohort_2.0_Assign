function getuniqueid(){
    const uniquid=Date().now().toString(36) + Math.random().toString(36).substring(2,5);
    return uniquid;
}

module.exports=getuniqueid