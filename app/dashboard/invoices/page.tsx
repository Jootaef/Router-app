import Link from 'next/link';

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <Link href="/dashboard/invoices/new" className="text-blue-600 underline mb-4 block">Create new invoice</Link>
      <p>Invoice list (a table or list would go here).</p>
      <p>Edit example: <Link href="/dashboard/invoices/1/edit" className="text-blue-600 underline">Edit invoice #1</Link></p>
    </div>
  );
}