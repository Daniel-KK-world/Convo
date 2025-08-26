import express from 'express';
import { signup, login, logout} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { updateProfile } from '../controllers/auth.controller.js';


const router = express.Router();

// Define the signup route
// This route will handle user registration
router.post('/signup', signup )

// Define the login route
// This route will handle user login
router.post('/login', login)

// Define the logout route
// This route will handle user logouts
router.post('/logout', logout)

router.put('updateProfile', protectRoute, updateProfile)

export default router; 

