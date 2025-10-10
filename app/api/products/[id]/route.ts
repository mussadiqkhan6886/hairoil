import { connectDB } from "@/lib/config/database"
import Product from "@/lib/model/ProductSchema"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (_req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    await connectDB()
    const {id} = await params

    const data = await Product.findById(id)

    if(!data){
        return NextResponse.json({message: "Product not found"}, {status: 400})
    }

    return NextResponse.json({message: "Product Found", data}, {status: 200})
}

export const PATCH = async (req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    await connectDB()
    const {id} = await params

    const res = req.formData()
    
    const name = res.get("name")
    // do all for product

    const product = {
        // changed data
    }

    const data = await Product.findByIdAndUpdate(id)

    return NextResponse.json({message: "Product updated Successfully", data}, {status: 200})
}

export const DELETE = async (_req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    await connectDB();
  console.log(params)
    const  id  = (await params).id;
   try {
    console.log(" Deleting product with ID:", id);

    const product = await Product.findByIdAndDelete(id);
    console.log("Product found:", product);

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to delete product" }, { status: 500 });
  }
}
