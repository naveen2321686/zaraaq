import Link from "next/link";

export default function SignoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 mt-24 flex flex-col items-center">
        <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l3-3m0 0l-3-3m3 3H9" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">You have been signed out</h1>
        <p className="text-gray-600 mb-6">Thank you for using Zaraq. You have successfully signed out of your account.</p>
        <Link href="/auth">
          <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login Again</span>
        </Link>
      </div>
    </div>
  );
}
