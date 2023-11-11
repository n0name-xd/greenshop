export async function POST(request: Request) {
  const formData = await request.formData();
  const userName = formData.get("userName");
  const password = formData.get("password");
  const email = formData.get("email");
  const confirmPassword = formData.get("confirmPassword");
  console.log("userName", userName);
  console.log("password", password);
  console.log("confirmPassword", confirmPassword);
  console.log("email", email);

  return Response.json({ message: "Ok" });
}
