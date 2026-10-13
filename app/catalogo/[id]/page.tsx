
import Link from "next/link";
import { notFound } from "next/navigation";

const pecas = [
  { id: 1, nome: "Camiseta Vintage", tamanho: "M", preco: 35 },
  { id: 2, nome: "Jaqueta Jeans", tamanho: "G", preco: 80 },
  { id: 3, nome: "Calça Jeans", tamanho: "38", preco: 55 },
];

export default async function Detalhes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const peca = pecas.find((p) => p.id === Number(id));

  if (!peca) notFound();

  return (
    <main className="min-h-screen bg-amber-50 p-8 text-zinc-900">
      <Link href="/catalogo">← Voltar ao catálogo</Link>

      <section className="mx-auto mt-10 max-w-3xl">
        <div className="flex h-72 items-center justify-center rounded-xl bg-zinc-200">
          Foto da peça
        </div>

        <h1 className="mt-6 text-3xl font-bold">{peca.nome}</h1>
        <p className="mt-4">Tamanho: {peca.tamanho}</p>
        <p className="mt-2 text-2xl font-bold">
          R$ {peca.preco.toFixed(2)}
        </p>

        <button className="mt-6 rounded-lg bg-zinc-900 px-6 py-3 text-white">
          Adicionar ao carrinho
        </button>
      </section>
    </main>
  );
}
