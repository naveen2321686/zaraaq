// 'use client';

// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Sidebar from "./Sidebar";
// import Header from "./header";

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   const [isLogin, setIsLogin] = useState(false);
//   const [checked, setChecked] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const loginData = localStorage.getItem("login");
//     const isUserLoggedIn = !!loginData;
//     setIsLogin(isUserLoggedIn);
//     setChecked(true);

//     if (isUserLoggedIn && pathname === "/auth") {
//       router.push("/dashboard");
//     }

//     if (!isUserLoggedIn && pathname !== "/auth") {
//       router.push("/auth");
//     }
//   }, [pathname, router]);

//   if (!checked) return null;

//   return (
//     <>

//       {isLogin ? (
//         <div className="flex h-[calc(100vh-4rem)]"> {/* assuming header is 4rem height */}
//           <Sidebar />
//           <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
//       {isLogin && <Header />}

//             {children}
//           </main>
//         </div>
//       ) : (
//         <main>{children}</main>
//       )}
//     </>
//   );
// }

'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);
  const [checked, setChecked] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const loginData = sessionStorage.getItem("login");
    const isUserLoggedIn = !!loginData;
    setIsLogin(isUserLoggedIn);
    setChecked(true);

    if (isUserLoggedIn && pathname === "/auth") {
      router.push("/dashboard");
    }

    if (!isUserLoggedIn && pathname !== "/auth") {
      router.push("/auth");
    }
  }, [pathname, router]);

  if (!checked) return null;

  if (!isLogin) return <main>{children}</main>;

  return (
    <div className="h-screen flex flex-col">
      {/* Header: Full width */}
      <header className="h-16 w-full z-10 fixed top-0 left-0 right-0">
        <Header />
      </header>

      {/* Content: Sidebar + Main */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar: starts below header */}
        <aside className="w-64 h-[calc(100vh-4rem)] bg-white shadow fixed top-20 left-0">
          <Sidebar />
        </aside>

        {/* Main content: next to sidebar */}
        <main className="ml-64 flex-1 bg-gray-50 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
          {children}
        </main>
        </div>
    </div>
  );
}
