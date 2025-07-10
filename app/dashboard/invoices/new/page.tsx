export default function NewInvoicePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create new invoice</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Customer" className="border p-2 w-full" />
        <input type="number" placeholder="Amount" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
} 