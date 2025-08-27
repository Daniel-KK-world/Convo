import express from 'express'; 
import { protectRoute } from '../middleware/auth.middleware';  
import { get } from 'mongoose';

const router = express.Router();

router.get("/users", protectRoute, getUsersforSidebar);

export default router;  