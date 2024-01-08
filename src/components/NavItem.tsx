import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const NavItem = ({ moblie }: { moblie?: boolean }) => {
  const { data: session, status } = useSession();

  console.log(session, status);
  // 세션에 따라 보여질 메뉴를 다르게 하기 위해.

  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full item-center ${
        moblie && "flex-col h-full"
      }`}
    >
      <li className="py-1 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Admin</Link>
      </li>
      <li className="py-1 text-center border-b-4 cursor-pointer">
        <Link href="/user">User</Link>
      </li>
      {session?.user ? (
        <li className="py-1 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>Signout</button>
        </li>
      ) : (
        <li className="py-1 text-center border-b-4 cursor-pointer">
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
