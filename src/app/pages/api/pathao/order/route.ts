import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
       const { access_token, order } = await req.json();
  try {
    // const { access_token, order } = await req.json();

    const { data } = await axios.post(
      `${process.env.PATHAO_BASE_URL}/aladdin/api/v1/orders`,
      order,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
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
