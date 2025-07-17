import React from "react";

const SignOutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8">
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center max-w-md w-full">
        <svg width="60" height="60" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
        </svg>
        <h2 className="text-2xl font-bold text-indigo-950 mb-2">Signed Out</h2>
        <p className="text-gray-600 mb-6 text-center">You have been successfully signed out.<br/>Thank you for using Zaraaq!</p>
        <a href="/auth" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Login Again</a>
      </div>
    </div>
  );
};

export default SignOutPage;
