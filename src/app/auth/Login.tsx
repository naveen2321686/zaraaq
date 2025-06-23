'use client';

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import loginImage from "../images/login_image.jpg";
import logoImage from "../images/logo2.jpg";
import { useRouter } from "next/navigation";

interface LoginValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [router]);

  const formik = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("login", JSON.stringify(values));
      router.push("/dashboard"); // redirect after login
    },
  });

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="grid grid-cols-4 w-full h-full overflow-hidden">
        {/* Left - 25% */}
        <div className="col-span-1 p-10 my-10" style={{ background: "#f7f7f7" }}>
          <div className="mb-6 text-center">
            <Image src={logoImage} alt="Logo" width={60} height={60} className="mx-auto" />
            <h2 className="text-2xl font-semibold mt-4">Log in</h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-4 ">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 w-full border border-gray-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mt-1 w-full border border-gray-800 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-600 mt-1">{formik.errors.password}</p>
              )}
            </div>

            <div className="text-sm text-right text-blue-500 cursor-pointer hover:underline">
              Reset Password?
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg p-2 mt-4 hover:bg-blue-700"
            >
              Log in
            </button>
          </form>
        </div>

        {/* Right - 75% */}
        <div className="col-span-3 hidden md:flex items-center justify-center p-10 bg-white">
          <Image
            src={loginImage}
            alt="Login Illustration"
            width={600}
            height={600}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
