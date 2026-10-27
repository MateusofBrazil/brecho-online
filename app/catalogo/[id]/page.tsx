
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Detalhes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const produtoId = Number(id);

  if (!Number.isSafeInteger(produtoId) || produtoId <= 0) {
    notFound();
  }

  const peca = await prisma.produto.findUnique({
    where: { id: produtoId },
  });

  if (!peca) notFound();

  return (
    <main className="min-h-screen bg-amber-50 p-6 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <Link href="/catalogo" className="hover:underline">
          ← Voltar ao catálogo
        </Link>

        <section className="mt-10 grid gap-10 rounded-xl bg-white p-6 shadow md:grid-cols-2">
          {peca.imagemUrl && (
            <Image
              src={peca.imagemUrl}
              alt={`Foto de ${peca.nome}`}
              width={900}
              height={900}
              className="h-80 w-full rounded-xl bg-zinc-100 object-contain"
            />
          )}

          <div>
            <h1 className="text-3xl font-bold">{peca.nome}</h1>

            <p className="mt-6 text-lg">
              Tamanho: {peca.tamanho}
            </p>

            <p className="mt-4 text-2xl font-bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(peca.preco))}
            </p>

            <p className="mt-4">
              Situação: {peca.vendido ? "Vendido" : "Disponível"}
            </p>

            <p className="mt-2">
              Estoque: {peca.estoque}
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
