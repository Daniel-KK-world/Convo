import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js'; // Importing the authentication routes
import { connectToDB } from './lib/db.js';

dotenv.config(); // Load environment variables from .env file
// Create an instance of express
const app = express();

//Use environment varaibles from .env file. 
const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON request bodies | basically so I can fetch the json data.  

app.use('/api/auth', authRoutes);

app.listen(5001, () => {
    console.log('Server is running on PORT:', PORT);
    connectToDB(); // Connect to the database when the server starts
}) 