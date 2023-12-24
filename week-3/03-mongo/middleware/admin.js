// Middleware for handling auth
const {Admin} =require("../db");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const adminexist= await Admin.exists({username:req.headers.username});
    if(adminexist){
        console.log("Admin exists")
        next();
    }
    else{
        res.status(404).json({message:"Invalid user"});
        return
    }

}

module.exports = adminMiddleware;