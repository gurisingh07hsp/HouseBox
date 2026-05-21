import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";


export async function POST(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const user = await User.findById(id);
    const messageForm = await req.json();

    console.log("user : ", user);

    if (!user) {
      return NextResponse.json(
        { message: "user not found" },
        { status: 404 }
      );
    }

    user.messages.push(messageForm);
    user.save();

    return NextResponse.json("Message sent");
  } catch (error) {
    return NextResponse.json(
      { message: "Error send message", error },
      { status: 500 }
    );
  }
}