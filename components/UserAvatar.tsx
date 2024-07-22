"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();

  return (
    <div>
      <Image
        src={session?.user?.image || "images/user-avatar.svg"}
        alt="User Profile Image"
        width={40} 
        height={40} 
        className="rounded-full"
        layout="fixed"
      />
    </div>

  );
}
