import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
      try {
         const input = req.nextUrl.searchParams.get("input");
        console.log("input : ", input);
        const response = await fetch(
        `https://api.locationiq.com/v1/autocomplete?key=${process.env.LOCATIONIQ_KEY}&q=${input}&limit=5&dedupe=1&countrycodes=in`
        );
        
        const data = await response.json();
        console.log("data : ", data);
        if(!data.error){
        return NextResponse.json({
        success: true,
        predictions: data
        });
        }
    } catch(error){
        return NextResponse.json(error);
    }
}