import { NextResponse } from "next/server";
import prisma from '@/prisma'

export const GET = async (req) => {

    try {
        const todos = await prisma.todo.findMany();

        return NextResponse.json({ message: "Sucesss", todos });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
    }
};

export const POST = async (req, res) => {

    try {
        const { title, description, completed } = await req.json()
        const todo = await prisma.todo.create({ data: { title, description, completed } })

        return NextResponse.json({ message: "Sucesss", todo });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "POST Error ", error }, { status: 500 });
    }
};
