const express = require('express');
const { registerUser, getIDCard } = require('../controllers/userController');
const router = express.Router();
// const authMiddleware = require("../middlewares/authMiddleware")

router.post('/register', registerUser);
router.get('/id-card', getIDCard);


module.exports = router;