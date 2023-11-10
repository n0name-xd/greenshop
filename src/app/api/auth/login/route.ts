export async function POST(request: Request) {
  const formData = await request.formData();
  const userName = formData.get("userName");
  const password = formData.get("password");
  console.log("userName", userName);
  console.log("password", password);
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() }),
  //   });
  //   const data = await res.json();
  //   return Response.json(data);
  return Response.json({ message: "Ok" });
}
