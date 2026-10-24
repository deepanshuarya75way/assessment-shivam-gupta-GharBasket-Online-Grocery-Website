import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function GET(request:NextRequest){
  try{
    const pincode = request.nextUrl.searchParams.get("pincode");

    if(!pincode){
      return NextResponse.json(
        {message:"Enter a valid 6 digit pincode"},
        {status:400}
      );
    }

    await connectDB();
    

    const discount = await AreaDiscount.findOne({
      pincode,
      isActive:true
    })

    return NextResponse.json({
      pincode,
      discountPercentage:discount?discount.discountPercentage :()
    });

  }catch(err){
    console.log(err);

    return NextResponse.json(
      {message:"unable to fetch discount"},
      {status:500}
    );
  }
}