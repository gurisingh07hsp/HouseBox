import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Property from "@/models/Property";

export async function GET(req: NextRequest) {
  await connectDB();
  try{
    const searchParams = req.nextUrl.searchParams;

    const filter = JSON.parse(
      searchParams.get("filter") || "{}"
    );

    const pagination = JSON.parse(
      searchParams.get("pagination") || "{}"
    );

    const agentId = searchParams.get("agentId");

    const query: any = {};

    // -------------------------
    // TEXT FILTERS
    // -------------------------

    if (filter.keyword) {
      query.name = {
        $regex: filter.keyword,
        $options: "i",
      };
    }

    if (filter.city) {
      query.city = filter.city;
    }

    if (filter.state) {
      query.state = filter.state;
    }

    if (filter.status) {
      query.status = filter.status;
    }

    if (filter.propertyType) {
      query.propertyType = filter.propertyType;
    }

    // -------------------------
    // PRICE FILTER
    // -------------------------

    query["propertyPrices.propertyPrice"] = {
      $gte: filter.price?.min || 0,
      $lte: filter.price?.max || 999999999,
    };

    // -------------------------
    // ROOMS FILTER
    // -------------------------

    query["additionalInformation.rooms"] = {
      $gte: filter.rooms?.min || 0,
      $lte: filter.rooms?.max || 100,
    };

    query["additionalInformation.bedrooms"] = {
      $gte: filter.bedrooms?.min || 0,
      $lte: filter.bedrooms?.max || 100,
    };

    query["additionalInformation.bathrooms"] = {
      $gte: filter.bathrooms?.min || 0,
      $lte: filter.bathrooms?.max || 100,
    };

    query["additionalInformation.garages"] = {
      $gte: filter.garages?.min || 0,
      $lte: filter.garages?.max || 100,
    };

    // -------------------------
    // SIZE FILTER
    // -------------------------

    // query["additionalInformation.propertySize"] = {
    //   $gte: filter.size?.min || 0,
    //   $lte: filter.size?.max || 999999,
    // };

    // -------------------------
    // AMENITIES FILTER
    // -------------------------

    if (filter.amenities?.length > 0) {
      query.amenities = {
        $all: filter.amenities,
      };
    }

    // -------------------------
    // AGENT FILTER
    // -------------------------

    if (agentId) {
      query.agent = agentId;
    }

    // -------------------------
    // SORTING
    // -------------------------

    let sortOption: any = {
      createdAt: -1,
    };

    switch (pagination.sort) {
      case "price-low":
        sortOption = {
          "propertyPrices.propertyPrice": 1,
        };
        break;

      case "price-high":
        sortOption = {
          "propertyPrices.propertyPrice": -1,
        };
        break;

      case "newest":
        sortOption = {
          createdAt: -1,
        };
        break;

      case "oldest":
        sortOption = {
          createdAt: 1,
        };
        break;

      default:
        break;
    }

     // -------------------------
    // PAGINATION
    // -------------------------

    const start = pagination.perPage?.start || 0;

    const limit =
      (pagination.perPage?.end || 10) - start;

    // -------------------------
    // FETCH
    // -------------------------

    const properties = await Property.find(query)
      .populate("agent")
      .sort(sortOption)
      .skip(start)
      .limit(limit);

          // Total count
    const total = await Property.countDocuments(query);

    return NextResponse.json({
      properties,
      total,
    });
















    // const properties = await Property.find();
    // return NextResponse.json(properties);
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