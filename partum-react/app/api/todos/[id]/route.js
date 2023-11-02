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

        return NextResponse.json({ message: "Success", todo }, { status: 200 })


    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
    }
}


export const PUT = async (req) => {

    try {
        const id = req.url.split("/todos/")[1]
        const { title, description, completed } = await req.json()

        const todo = await prisma.todo.update(
            {
                data: { title, description, completed },
                where: { id }
            }
        );
        if (!todo) return NextResponse.json({ message: "Not Found" }, { status: 404 })

        return NextResponse.json({ message: "Success", todo }, { status: 200 })


    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "UPDATE Error ", error }, { status: 500 });
    }

}


export const DELETE = async (req) => {
    try {
        const id = req.url.split("/todos/")[1]
        const todo = await prisma.todo.delete(
            {
                where: { id }
            }
        );
        if (!todo) return NextResponse.json({ message: "Not Found" }, { status: 404 })

        return NextResponse.json({ message: "Todo deleted successfuly", }, { status: 200 })


    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "UPDATE Error ", error }, { status: 500 });
    }
}
