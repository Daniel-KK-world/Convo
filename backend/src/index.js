import express from 'express';

import authRoutes from './routes/auth.route.js'; // Importing the authentication routes

// Create an instance of express
const app = express();

app.use('/api/auth', authRoutes)

app.listen(5001, () => {
    console.log('Server is running on port 5001');
}) 