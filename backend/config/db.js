import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://JoeMartindale:14122000@cluster0.inhx4.mongodb.net/IDP").then(()=>console.log("DB Connected"));
}