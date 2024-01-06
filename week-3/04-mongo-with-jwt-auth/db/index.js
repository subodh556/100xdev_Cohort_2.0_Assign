const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        length: 8,
      },
    },
    { timestamps: true }
);

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        length: 8,
      },
      purchasedCourses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
    },
    { timestamps: true });

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
        unique: true,
      },
      price: {
        type: Number,
        required: true,
      },
      imageLink: {
        type: String,
        required: true,
      },
    });

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}