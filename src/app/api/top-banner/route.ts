import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const formData = await req.formData();
    const bannerOne = formData.get("bannerOne");
    const bannerTwo = formData.get("bannerTwo");
    const bannerThree = formData.get("bannerThree");

    const sendFormData = new FormData();

    if (bannerOne) {
      sendFormData.append("bannerOne", bannerOne);
    }

    if (bannerTwo) {
      sendFormData.append("bannerTwo", bannerTwo);
    }

    if (bannerThree) {
      sendFormData.append("bannerThree", bannerThree);
    }

    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/topbanner/set-banner`,
      sendFormData,
      {
        maxBodyLength: Infinity,
      }
    );

    return NextResponse.json({ message: "Files upload success" });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.message);
    }
    return NextResponse.json({ data: "Something went wrong" });
  }
}
