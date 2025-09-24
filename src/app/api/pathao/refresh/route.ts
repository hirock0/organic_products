import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { refresh_token } = await req.json();

    const { data } = await axios.post(
      `${process.env.PATHAO_BASE_URL}/aladdin/api/v1/issue-token`,
      {
        client_id: process.env.PATHAO_CLIENT_ID,
        client_secret: process.env.PATHAO_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      error?.response?.data || { message: "Something went wrong" },
      { status: error?.response?.status || 500 }
    );
  }
}
