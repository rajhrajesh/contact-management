const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    
    if(!username || !email || !password) {
        res.status(400);
        throw new Error('All fileds are required');
    }

    const userAvailable = await User.findOne({email});

    if(userAvailable) {
        res.status(400);
        throw new Error('User already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password: ', hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if(user) {
        console.log(`User created ${user})`)
        res.status(201).json({_id: user.id, email: user.email});
    }
    else {
        res.status(400);
        throw new Error('User data is not valid');
    }
    res.json({message: 'Register the user successfully'});
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory!');
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        throw new Error(`User with email address ${email} not found`);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const payload = {
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        };
        const options = {
            expiresIn: '15m',
        };
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, options);
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error('email or password is not valid');
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie('token', { path: '/' });
    res.status(200).json({ message: 'Logout successful' });
});


module.exports = {registerUser, loginUser, logoutUser};