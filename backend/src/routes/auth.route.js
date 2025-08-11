import express from 'express';


const router = express.Router();

// Define the signup route
// This route will handle user registration
router.post('/signup', (req, res) => {
    res.send('signup route')
} )

// Define the login route
// This route will handle user login
router.post('/login', (req, res) => {
    res.send('login route')
} )

// Define the logout route
// This route will handle user logouts
router.post('/logout', (req, res) => {
    res.send('logout route')
} )

export default router; 

