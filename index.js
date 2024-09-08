import dotenv from 'dotenv';
import { app } from "./app.js";
import { connectToMongoDB, disconnetFromMongoDB } from './src/db/database.js';
dotenv.config();


const PORT = process.env.PORT; 

app.listen(PORT, async ()=>{
    await connectToMongoDB(); 
    console.log(`server is listening on port ${PORT}`);

    // create admin user
    process.on('SIGINT', async ()=>{
        console.log('closing the app due to SIGINT');
        await disconnetFromMongoDB();
        process.exit(0);
    });
});

console.log('hwllo world'); 