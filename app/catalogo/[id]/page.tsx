
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const pecas = [
  { id: 1, nome: "Camisa de Futebol Listrada", tamanho: "M", preco: 24 },
  { id: 2, nome: "Moletom Preto com Capuz", tamanho: "G", preco: 20 },
  { id: 3, nome: "Blusa Preta", tamanho: "38", preco: 11 },
  { id: 4, nome: "Casaco Cinza com Gola Preta", tamanho: "GG", preco: 12 },
  { id: 5, nome: "Calça Rosa", tamanho: "P", preco: 8 },
  { id: 6, nome: "Camisa Bege Estampada", tamanho: "M", preco: 14 },
  { id: 7, nome: "Suéter Colorido", tamanho: "M", preco: 12 },
  { id: 8, nome: "Vestido de Fantasia Rosa e Preto", tamanho: "M", preco: 17 },
  { id: 9, nome: "Camisa Estampada Azul e Branca", tamanho: "M", preco: 21 },
  { id: 10, nome: "Camisa Dourada Estampada", tamanho: "M", preco: 22 },
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
    <main className="min-h-screen bg-amber-50 p-6 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <Link href="/catalogo" className="hover:underline">
          ← Voltar ao catálogo
        </Link>

        <section className="mt-10 grid gap-10 rounded-xl bg-white p-6 shadow md:grid-cols-2">
          <Image
            src={`/pecas/images${peca.id}.jpg`}
            alt={`Foto de ${peca.nome}`}
            width={900}
            height={900}
            className="h-80 w-full rounded-xl bg-zinc-100 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold">{peca.nome}</h1>

            <p className="mt-6 text-lg">
              Tamanho: {peca.tamanho}
            </p>

            <p className="mt-4 text-2xl font-bold">
              {peca.preco !== null
                ? new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(peca.preco)
                : "Preço a definir"}
            </p>

            <p className="mt-6 text-sm text-zinc-600">
              Produto do nosso brechó. Informações sujeitas
              a atualização.
            </p>

            <p className="mt-8 rounded-lg bg-amber-50 p-4 text-sm">
              Carrinho de compras em desenvolvimento.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
