import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const formData = await req.formData();
    const bannerOne = formData.get("bannerOne");

    console.log("bannerOne", bannerOne);

    return NextResponse.json({ data: "hi" });
  } catch (error) {
    throw error;
  }
}
