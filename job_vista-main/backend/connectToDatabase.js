import mongoose from "mongoose";
const uri='mongodb+srv://dhruvarora8433:JobVista@cluster0.ck8fteg.mongodb.net/';


mongoose.connect(uri)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
