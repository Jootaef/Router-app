import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Financial Dashboard</h1>
      <p className="mb-4">Easily manage your customers and invoices.</p>
      <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Log in</Link>
    </main>
  );
}
