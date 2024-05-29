"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({ mode }) => {

  const handleAuth = (provider) => {
    signIn(provider, {
      callbackUrl: "/bookings"
    })
  }

  return (
    <>
      <div className="text-center text-xs text-gray-500">
        {mode === 'register' ? (
          <Link className="underline" href="/login">Login</Link>
        ) : (
          <Link className="underline" href="/register">Register</Link>
        )}
        &nbsp; or Sign up with
      </div>
      <div className="flex gap-4">
        <button
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
          onClick={() => handleAuth("facebook")}
        >
          <Image src="/fb.png" alt="facebook" width={32} height={32} />
          <span>Facebook</span>
        </button>
        <button
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
          onClick={() => handleAuth("google")}
        >
          <Image src="/google.png" alt="google" width={32} height={32} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
