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
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/auth/registration`,
      registrationData
    );

    console.log("response", response);

    return Response.json({ message: "Ok" });
  } catch (error) {
    console.log("error", error);
    return Response.json({ message: "Somesing went wrong" });
  }
}
