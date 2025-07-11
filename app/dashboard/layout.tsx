import Link from "next/link";
import { HomeIcon, DocumentTextIcon, UsersIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r flex flex-col justify-between py-6 px-4">
        <div>
          <div className="flex items-center mb-10">
            <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-3xl">🌐</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-blue-700">Acme</span>
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">
              <HomeIcon className="h-5 w-5" /> Home
            </Link>
            <Link href="/dashboard/invoices" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">
              <DocumentTextIcon className="h-5 w-5" /> Invoices
            </Link>
            <Link href="/dashboard/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">
              <UsersIcon className="h-5 w-5" /> Customers
            </Link>
          </nav>
        </div>
        <footer className="mt-8 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Acme. Created by Jaydan Valencia.
        </footer>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 font-medium mt-4">
          <ArrowLeftOnRectangleIcon className="h-5 w-5" /> Sign Out
        </button>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
} 