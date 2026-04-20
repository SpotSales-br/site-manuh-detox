import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="section-tag">Erro 404</p>
        <h1 className="section-title mb-4">Pagina nao encontrada</h1>
        <p className="mb-8 text-ink-soft">
          A pagina que voce procura nao existe ou foi movida.
        </p>
        <Link href="/" className="btn-primary">
          Voltar para o inicio
        </Link>
      </div>
    </main>
  );
}
