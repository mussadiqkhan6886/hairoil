import { connectDB } from "@/lib/config/database"
import Product from "@/lib/model/ProductSchema"
import { NextRequest, NextResponse } from "next/server"

await connectDB()

export const GET = async () => {
    const res = await Product.find({})

    if(!res){
        return NextResponse.json({message: "Failed to fetch data from database"}, {status: 400})
    }

    return NextResponse.json({message: "Fetched Data", data: res}, {status: 200})
}

export const POST = async (req: NextRequest) => {
    const res = red.formData()

    const name = res.get("name")
    //do for all other data

    const product = {
        // fill product with every formdata 
    }

    const data = Product.create(product)

    return NextResponse.json({message: "Product added successfully", data: product}, {status: 200})

}