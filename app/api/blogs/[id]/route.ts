import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import blog from "@/models/Blog";


export async function GET(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const Blog = await blog.findOne({slug: id});

    if (!Blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({blog: Blog});
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching Blog", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params;
    const data = await req.json();

    const updatedBlog = await blog.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating Blog", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const deletedBlog = await blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting Blog", error },
      { status: 500 }
    );
  }
}