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

// GET request

export async function GET() {
  try {
    const allLists = await prisma.list.findMany({
      select: {
        title: true,
        id: true,
        description: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (allLists) {
      return NextResponse.json({
        success: true,
        data: allLists,
      });
    } else {
      NextResponse.json({ success: false, message: "An error occoured" });
    }
  } catch (error) {
    NextResponse.json({ success: false, message: "An error occoured" });
  }
}

//PUT Request
export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const currentListId = searchParams.get("id");
  const data = await req.json();

  try {
    const updatedList = await prisma.list.update({
      where: {
        id: currentListId,
      },
      data: {
        title: data.title,
        description: data.description,
      },
    });
    if (updatedList) {
      return NextResponse.json({
        success: true,
        message: "Updated successfully",
      });
    }
  } catch (error) {
    NextResponse.json({ success: false, message: "An error occoured" });
  }
}
