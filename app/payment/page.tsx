"use client";

import React from "react";

export default function PageSuspended() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">
          Website Temporarily Unavailable
        </h1>
        <p className="text-gray-700 mb-6">
          This website is currently suspended due to pending payment. Please contact
          the developer to restore access.
        </p>
        <p className="text-sm text-gray-600">
          For inquiries, contact:{" "}
          <a
            href="mailto:mussadiqkhan6886@gmail.com"
            className="text-red-500 font-medium hover:underline"
          >
            mussadiqkhan6886@gmail.com
          </a>
          <br />
          or call:{" "}
          <a
            href="tel:+923189328584"
            className="text-red-500 font-medium hover:underline"
          >
            +92 318 9328584
          </a>
        </p>
      </div>

      <footer className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} — Website suspended by developer.
      </footer>
    </main>
  );
}
