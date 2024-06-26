import { User, Product } from "./models";
import { connectToDB } from "./utils";
export const fetchUsers = async (q, page) => {
    
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try{
        await connectToDB();
        const count  = await User.find({username: { $regex: regex} }).count();
        const users = await User.find({username: { $regex: regex} }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        console.log("User fetched")
        return {users, count};
    }catch(error){
        console.log("Error fetching user", error);
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try{
        await connectToDB();
        const count  = await Product.find({title: { $regex: regex} }).count();
        const products = await Product.find({title: { $regex: regex} }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        console.log(products);
        console.log("Products fetched")
        return {products, count};
    }catch(error){
        console.log("Error fetching user", error);
        throw new Error("Failed to fetch products!");
    }
}