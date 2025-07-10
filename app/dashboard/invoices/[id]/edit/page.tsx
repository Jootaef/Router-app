export default function EditInvoicePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Editar factura #{params.id}</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Cliente" className="border p-2 w-full" defaultValue={`Cliente de factura #${params.id}`} />
        <input type="number" placeholder="Monto" className="border p-2 w-full" defaultValue={100} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Guardar cambios</button>
      </form>
    </div>
  );
} 