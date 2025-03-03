import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://JoeMartindale:Resetmypassword1@cluster0.inhx4.mongodb.net/IDP").then(()=>console.log("Database Connected"));
};