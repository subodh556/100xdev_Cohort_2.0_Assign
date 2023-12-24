const {User} = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userexist=await User.exists({username:req.headers.username});
    if(userexist){
        console.log("User exists");
        next();

    }
    else{
        res.status(404).json({message:"user does not exist"});
        return;
    }
}

module.exports = userMiddleware;