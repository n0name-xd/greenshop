import axios from "axios";

export async function POST(request: Request) {
  const formData = await request.formData();
  const userName = formData.get("userName");
  const password = formData.get("password");

  const loginData = {
    userName,
    password,
    clientSecret: process.env.CLIENT_SECRET,
  };

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/auth/login`, loginData);

    return Response.json({ message: "Ok" });
  } catch (error: any) {
    if (error.response && error.response.status) {
      if (error.response.status === 403) {
        return Response.json({ message: "Invalid request" }, { status: 403 });
      }

      return Response.json(
        { message: error.response.data.message },
        { status: error.response.status }
      );
    }

    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
