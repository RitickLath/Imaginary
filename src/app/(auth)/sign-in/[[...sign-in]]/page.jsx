import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen mx-auto flex justify-center items-center">
      <div>
        <SignIn />
      </div>
    </div>
  );
}
