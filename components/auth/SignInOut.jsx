"use client";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/auth/login");
  };

  console.log("Current auth state:", auth);

  return (
    <>
      <div>
        {auth ? (
          <>
            <span className="mx-2">
              Hello, {auth?.firstName} {auth?.lastName}{" "}
            </span>
            <span className="mx-1"> | </span>
            <a className="cursor-pointer" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </div>
    </>
  );
};

export default SignInOut;
