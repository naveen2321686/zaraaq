'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);
  const [checked, setChecked] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const loginData = localStorage.getItem("login");
    const isUserLoggedIn = !!loginData;
    setIsLogin(isUserLoggedIn);
    setChecked(true);

    // ✅ If logged in and trying to access login page, redirect to /dashboard
    if (isUserLoggedIn && pathname === "/auth") {
      router.push("/dashboard");
    }

    // ✅ If not logged in and trying to access other page, redirect to login
    if (!isUserLoggedIn && pathname !== "/auth") {
      router.push("/auth");
    }
  }, [pathname, router]);

  if (!checked) return null;

  return (
    <>
      {isLogin && <Header />}
      {children}
    </>
  );
}
