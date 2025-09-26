import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    const { data } = await axios.get(
      `${process.env.PATHAO_BASE_URL}/aladdin/api/v1/stores`,
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
