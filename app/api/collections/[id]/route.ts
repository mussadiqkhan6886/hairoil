import Product from "@/lib/model/ProductSchema"
import { NextRequest, NextResponse } from "next/server"

export const GET = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params

    const data = Product.findById(id)

    if(!data){
        return NextResponse.json({message: "Product not found"}, {status: 400})
    }

    return NextResponse.json({message: "Product Found", data}, {status: 200})
}

export const PATCH = async (req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
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

export const DELETE = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params

    const data = await Product.findByIdAndDelete(id)

    return NextResponse.json({message: "Product Deleted Successfully"}, {status: 200})
}
