import { NextApiResponse } from "next/server"
export async function GET() {
    return NextApiResponse.json({ name: "John Doe" });
}