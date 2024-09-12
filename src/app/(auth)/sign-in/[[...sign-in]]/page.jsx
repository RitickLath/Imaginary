import { SignIn } from "@clerk/nextjs";


export default function Page() {
  return (
    <div className="w-full max-w-[200px] h-screen mx-auto flex justify-center items-center">
      <div className="">
        <SignIn />
      </div>
    </div>
  );
}
