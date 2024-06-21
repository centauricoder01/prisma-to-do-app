import { NextResponse } from "next/server";
import prisma from "@/db/db";
import jsonwebtoken from "jsonwebtoken";

interface Params {
  userid: number;
}

export async function DELETE(response: Response) {}

export async function GET(request: Request, { params }: { params: Params }) {
  const id = params.userid;

  console.log(id, "This is id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
export async function POST(response: Response) {}
export async function UPDATE(response: Response) {}
