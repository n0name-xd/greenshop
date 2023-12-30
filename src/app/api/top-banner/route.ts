import axios from "axios";
import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req: Request, res: Response) {
  try {
    const formData = await req.formData();
    const bannerOne = formData.get("bannerOne");

    const sendFormData = new FormData();

    if (bannerOne) {
      sendFormData.append("files", bannerOne);
    }

    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/topbanner/set-banner`,
      sendFormData,
      {
        maxBodyLength: Infinity,
      }
    );

    return NextResponse.json({ data: "hi" });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.message);
    }
    return NextResponse.json({ data: "Something went wrong" });
  }
}
