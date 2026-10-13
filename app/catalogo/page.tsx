
import Link from "next/link";

const pecas = [
  { id: 1, nome: "Camiseta Vintage", tamanho: "M", preco: 35 },
  { id: 2, nome: "Jaqueta Jeans", tamanho: "G", preco: 80 },
  { id: 3, nome: "Calça Jeans", tamanho: "38", preco: 55 },
];

export default function Catalogo() {
  return (
    <main className="min-h-screen bg-amber-50 p-8 text-zinc-900">
      <Link href="/">← Início</Link>
      <h1 className="my-8 text-3xl font-bold">Catálogo</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pecas.map((peca) => (
          <article key={peca.id} className="rounded-xl bg-white p-4 shadow">
            <div className="flex h-56 items-center justify-center rounded bg-zinc-200">
              Foto da peça
            </div>
            <h2 className="mt-4 text-xl font-semibold">{peca.nome}</h2>
            <p>Tamanho: {peca.tamanho}</p>
            <p className="font-bold">R$ {peca.preco.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
