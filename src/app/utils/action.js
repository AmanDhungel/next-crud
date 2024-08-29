import { revalidatePath } from "next/cache";
import { connectDb } from "./connectDb"
import { Product, User } from "./model";
import bcrypt from 'bcryptjs'
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const getProductbyId = async(id) => {
    'use server'

    connectDb();
    const product = await Product.findById(id);
    return product;
}

export const getProduct = async(q) => {
    const regex = new RegExp(q, 'i');
    await connectDb();
    const product = await Product.find({name : {$regex : regex}});
    return product
}


export const fetchUsers = async (q, page = 1) => {
    const regex = new RegExp(q, 'i');
    const itemsPerPage = 2;
    try {
        await connectDb();
        const count = await User.find({ username: { $regex: regex } }).countDocuments();  // Corrected method name
        console.log("count", count);
        const users = await User.find({ username: { $regex: regex } })
            .limit(itemsPerPage)
            .skip(itemsPerPage * (page - 1));
        const data = {count, users}
        return data;
    } catch (error) {
        console.log("Error fetching users:", error);
    }
};


export const Register = async(formData) => {
    'use server'
    connectDb();

    const {name, email, password} = formData;
    const hashedPassword = bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
} 

export const addProduct = async(formData) => {
    'use server'
    try {
        connectDb();
        const {name, type, price} = Object.fromEntries(formData);
        const product = await Product.create({
            name,
            type,
            price
        })
    } catch (error) {
        console.log(error.message);
        throw new Error("erorr while adding product");
    }
    revalidatePath('/items/product');
    redirect('/items/product');
} 


export const deleteProduct = async (formData) => {
    'use server'
    const { id } = Object.fromEntries(formData);
    console.log("Deleting product with ID:", id);
    try {
        await connectDb();
        await Product.findByIdAndDelete(id);
        // Revalidate the path only after successful deletion
        revalidatePath('/items/product');
    } catch (error) {
        console.log("Error during deletion:", error);
        // Handle the error accordingly, but don't skip revalidation
    }
};

export const updateProduct = async (formData) => {
    'use server'
    const { id, name, price, type } = Object.fromEntries(formData);
    try {
        await connectDb();
        
        const updateFields = { name, price, type}
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);
        await Product.findByIdAndUpdate(id, updateFields);
        // Revalidate the path only after successful deletion
     
    } catch (error) {
        console.log("Error during deletion:", error);
        // Handle the error accordingly, but don't skip revalidation
    }

    revalidatePath('/items/product');
    redirect('/items/product');
};

    