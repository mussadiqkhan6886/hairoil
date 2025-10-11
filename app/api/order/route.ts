import { connectDB } from "@/lib/config/database";
import order from "@/lib/model/OrderSchema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    const orders = await order.find({})

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch orders." },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();

    const newOrder = await order.create({
      items: body.items,
      totalPrice: body.totalPrice,
      userDetails: body.userDetails,
      note: body.note,
      shippingAddress: body.shippingAddress,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      order: newOrder,
    });
  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to place order." },
      { status: 500 }
    );
  }
};
