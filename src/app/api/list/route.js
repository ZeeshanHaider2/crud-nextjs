import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
// POST request

export async function POST(req) {
  const data = await req.json();
  try {
    const newList = await prisma.list.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
    if (newList) {
      return NextResponse.json({
        success: true,
        message: "data created successfully",
      });
    }
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      success: false,
      message: error,
    });
  }
}
