import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ message: "Missing token" }, { status: 401 });
    }

    // Get request body
    const body = await req.json();

    const { data } = await axios.post(
      `${process.env.PATHAO_BASE_URL}/aladdin/api/v1/stores`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      error?.response?.data || { message: "Something went wrong" },
      { status: error?.response?.status || 500 }
    );
  }
}
