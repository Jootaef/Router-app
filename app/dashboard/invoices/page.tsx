import Link from 'next/link';

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Facturas</h1>
      <Link href="/dashboard/invoices/new" className="text-blue-600 underline mb-4 block">Crear nueva factura</Link>
      <p>Lista de facturas (aquí iría una tabla o listado).</p>
      <p>Ejemplo de edición: <Link href="/dashboard/invoices/1/edit" className="text-blue-600 underline">Editar factura #1</Link></p>
    </div>
  );
}