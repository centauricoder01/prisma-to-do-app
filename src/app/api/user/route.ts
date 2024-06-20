import { NextResponse } from "next/server";
import prisma from "@/db/db";
import { addUserBody } from "@/types/types";
import bcrypt from "bcrypt";

export async function POST(request: Request, response: Response) {
  const body: addUserBody = await request.json();
  const { name, email, password } = body;

  const findExistingUser = await prisma.user.findUnique({ where: { email } });

  if (findExistingUser !== null) {
    return NextResponse.json(
      {
        success: false,
        message: `User Already Exist, Please use different Email`,
        responseBody: findExistingUser,
      },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const createNewUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: `User Created Successfully.`,
      responseBody: createNewUser,
    },
    { status: 200 }
  );
}

export async function GET(response: Response) {
  
}
