
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-zinc-900">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold">Brechó</h1>
        <p className="mt-2">Moda consciente e acessível</p>

        <nav className="mt-8 flex flex-wrap justify-center gap-6">
          <Link href="/">Início</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/carrinho">Carrinho</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/contato">Contatos</Link>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold">
          Bem-vindo ao nosso brechó!
        </h2>

        <p className="mt-6">
          Aqui você encontra roupas de qualidade, estilo e
          preços acessíveis.
        </p>

        <h3 className="mt-12 text-2xl font-semibold">
          Nosso objetivo
        </h3>

        <p className="mt-4">
          Incentivar o consumo consciente, dar uma nova vida
          às roupas e oferecer peças especiais para todos.
        </p>
      </section>
    </main>
  );
}
