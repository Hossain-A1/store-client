"use client";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { buttonVariance } from "./ui/Button";

const Profile = () => {
  const session = useSelector((state: RootState) => state.auth.userAndToken);

  const picUrl = session?.user.picUrl || "";
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className="w-28 h-28">
        <Image
          src={picUrl}
          alt={session?.user?.name || "User"}
          width={64}
          height={64}
          priority
          className=' h-full w-full object-cover rounded-full group-hover:scale-125 eq'
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-semibold">{session?.user.name}</h2>
        <Link href='/edit-profile' className={cn(buttonVariance({variant:"success"}))}>⇙ Edit Profile</Link>
      </div>
    </div>
  );
};

export default Profile;
