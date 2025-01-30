import db from "@/frameworks/db";
import {NextResponse} from "next/server";

export const GET = async () => {
    const todos = await db.contact.findMany({})

    return NextResponse.json(todos)
}