import axios from "axios";

export async function POST(request: Request) {
  const formData = await request.formData();
  const userName = formData.get("userName");
  const password = formData.get("password");
  const email = formData.get("email");

  const registrationData = {
    userName,
    password,
    email,
    clientSecret: process.env.CLIENT_SECRET,
  };

  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/auth/registration`,
      registrationData
    );

    return Response.json({ message: "Ok" });
  } catch (error: any) {
    return Response.json(
      { message: error.response.data.message },
      { status: error.response.data.statusCode }
    );
  }
}
