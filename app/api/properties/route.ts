import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Property from "@/models/Property";

export async function GET(req: Request) {
  await connectDB();
  try{
    const properties = await Property.find();
    return NextResponse.json(properties);
  }catch(error){
    return NextResponse.json(
      {message: "Property Fetch Error", error},
      {status: 500}
    )
  }
}


export async function POST(req: Request) {
  await connectDB();
  try {
    const propertyForm = await req.json();
    const property = await Property.create(propertyForm);

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json(
      { message: "Property Added error", error },
      { status: 500 }
    );
  }
}