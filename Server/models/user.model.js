const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique :true,
    },
    firstName: String,
    lastName: String,
    teamName: String,
    college: String,
    domain: String,
    email: { type: String, required: true },
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);
module.exports = User;