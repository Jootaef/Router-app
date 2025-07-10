import LoginForm from '../ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <LoginForm />
      </div>
    </main>
  );
} 