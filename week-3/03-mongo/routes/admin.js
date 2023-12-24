const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin , Course, User} =require("../db");
const {getuniqueid} = require("../Utils/getuniqueid")
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username:req.body.username,
        password:req.body.password
    })
    res.json({message:"Admin Created"});
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const courseid=getuniqueid();
    Course.create({
        id:courseid,
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink,
        createdBy : req.headers.username
    })
    res.json({message:"Course Created",courseid:courseid});

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let username=req.body.username;
    User.find({createdBy:username}).then(function(courses){
        res.status(200).json({courses});
    })
});

module.exports = router;