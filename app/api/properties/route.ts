import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Property from "@/models/Property";
export async function POST(req: Request) {
    console.log('run')
  await connectDB();
  try {
    const propertyForm = await req.json();

    console.log("property data : ", propertyForm);

    const property = await Property.create(propertyForm);

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json(
      { message: "Property Added error", error },
      { status: 500 }
    );
  }
}