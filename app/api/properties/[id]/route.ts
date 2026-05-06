import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Property from "@/models/Property";
import User from "@/models/user";


export async function PUT(  req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
     const { id } = await params;
    const propertyForm = await req.json();

    const property = await Property.findByIdAndUpdate(
      id,
      propertyForm,
      { new: true }
    );

    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }


    return NextResponse.json({
      property,
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

export async function DELETE(  req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();
   try{
        const {id} = await params;
        const property = await Property.findByIdAndDelete(id);

        if(!property){
            return NextResponse.json(
                {message: 'Property not found'},
                {status: 404}
            )
        }

        return NextResponse.json({
            message: "Property deleted successfully",
        })
    }catch(error){
        return NextResponse.json({
            message: "Delete error",
            error,
        }, { status: 500 });
    }
   }