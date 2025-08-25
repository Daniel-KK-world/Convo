import mongoose, { connect } from 'mongoose'; 

export const connectToDB = async () => {
    try{
        const conn = await connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Mongo connection Error: ${error.message}`);

    }

};