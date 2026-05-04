import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";


export async function PUT(  req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
     const { id } = await params;
    const form = await req.json();

    const user = await User.findByIdAndUpdate(
      id,
      form,
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const userObj = user.toObject();

    delete userObj.password;

    return NextResponse.json({
      message: "User updated successfully",
      user: userObj,
    });

  } catch (error) {
    return NextResponse.json(
      {
        message: "Update error",
        error,
      },
      { status: 500 }
    );
  }
}