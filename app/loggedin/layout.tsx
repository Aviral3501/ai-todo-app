
import Providers from "@/components/Providers";
import { useSession} from 'next-auth/react';
import {auth} from "@/auth";

export default async function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

const session = await auth();
console.log(session?.user);


  return (
    <Providers session={session}>
      {children}
    </Providers>
  );
}
