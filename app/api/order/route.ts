import { connectDB } from "@/lib/config/database";
import Order from "@/lib/model/OrderSchema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();

    const newOrder = await Order.create({
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
