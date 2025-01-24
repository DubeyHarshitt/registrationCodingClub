const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const registerUser = async (req, res) => {
    const { username, firstName, lastName, teamName, domain, email, college } = req.body;

    try {
        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ success: false, message: "Username Already Exists" });
        }

        user = new User({
            username,
            firstName,
            lastName,
            teamName,
            domain,
            email,
            college ,
        });
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or another email provider
            auth: {
                user: process.env.EMAIL_USER, // your email address
                pass: process.env.EMAIL_PASS  // your email password or app password
            }
        });

        const teamId = `${teamName.slice(0, 2).toUpperCase()}${user._id.toString().slice(0, 4)}${domain.toUpperCase()}`;

        // Email details
        const mailOptions = {
            from: process.env.EMAIL_USER, // sender address
            to: `${email},`,// atuldevvarrora@gmail.com`, // recipient address
            subject: 'Welcome to Our Platform!',
            text: `Hi ${firstName},\n\nThank you for registering on our platform.\n\nYour Team Name: ${teamName}\nDomain: ${domain}\nTeam ID:${teamId}\n\nBest regards,\nYour Team`
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(201).json({ success: true, message: "User Registered Successfully and Email Sent" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Registration Failed" });
    }
};


const getIDCard = async ( req, res )=>{
    try {    
        const data = await User.find(); // Fetch data from the database
        res.json(data); // Send data as JSON
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
}

// const getIDCard = async (req, res) => {
//     try {
//         // Assuming `username` is passed in the request (e.g., from a decoded token or directly in the request)
//         const { username } = req.user; // Extracted from middleware (authentication)
// console.log(username);

//         if (!username) {
//             return res.status(400).json({ success: false, message: 'Username is required' });
//         }

//         const user = await User.findOne({ username }); // Fetch the user data

//         if (!user) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }

//         res.status(200).json({ success: true, data: user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Failed to fetch user data' });
//     }
// };


module.exports = { registerUser, getIDCard }