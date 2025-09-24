import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {
  try {
    const { data } = await axios.post(
      `${process.env.PATHAO_BASE_URL}/aladdin/api/v1/issue-token`,
      {
        client_id: process.env.PATHAO_CLIENT_ID,
        client_secret: process.env.PATHAO_CLIENT_SECRET,
        username: process.env.PATHAO_USERNAME,
        password: process.env.PATHAO_PASSWORD,
        grant_type: "password",
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
