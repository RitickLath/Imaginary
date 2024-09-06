import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const { userId } = auth();
  console.log(userId);
  if (!userId) return null;

  return <h1>Hello, {userId}</h1>;
}
