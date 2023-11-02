import { NextResponse } from "next/server";
import prisma from '@/prisma'

export const GET = async (req) => {
    try {
        // http://localhost:3000/api/todos/654386076ee01e94ec66792d
        // [/todos/, 654386076ee01e94ec66792d], [0,1]
        // 654386076ee01e94ec66792d

        const id = req.url.split("/todos/")[1]
        const todo = await prisma.todo.findFirst({
            where: { id } // 654386076ee01e94ec66792d
        });

        if (!todo) return NextResponse.json({ message: "Not Found" }, { status: 404 })

        return NextResponse.json({ message: "Success", todo },)


    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
    }
}
