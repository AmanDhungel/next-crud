import mongoose from "mongoose";

 const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    type: {
        type: String,
        required: true,
        min: 3
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
 
})

 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        min: 3
    },
     password: {
        type: String,
        required: true
     }
 
})

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);