import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient;
  
export async function GET(request) {
    const session = await getServerSession(authOptions)
    
    const user = await prisma.account.findFirst({where: {
        userId: session.user.id
    }})
    
    return NextResponse.json({ user })
}   
