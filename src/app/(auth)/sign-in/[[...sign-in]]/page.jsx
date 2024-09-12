import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="z-0 w-full max-w-[200px] pt-6 pb-3 mx-auto flex justify-center">
      <div className="">
        <SignIn />
      </div>
    </div>
  );
}
