
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Catalogo() {
  const pecas = await prisma.produto.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main className="min-h-screen bg-amber-50 p-8 text-zinc-900">
      <Link href="/">← Início</Link>
      <h1 className="my-8 text-3xl font-bold">Catálogo</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pecas.map((peca) => (
          <article
            key={peca.id}
            className="rounded-xl bg-white p-4 shadow"
          >
            {peca.imagemUrl && (
              <Image
                src={peca.imagemUrl}
                alt={`Foto de ${peca.nome}`}
                width={600}
                height={600}
                className="h-56 w-full rounded object-contain"
              />
            )}

            <h2 className="mt-4 text-xl font-semibold">
              {peca.nome}
            </h2>

            <p>Tamanho: {peca.tamanho}</p>

            <p className="font-bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(peca.preco))}
            </p>

            <Link
              href={`/catalogo/${peca.id}`}
              className="mt-4 inline-block rounded bg-zinc-900 px-4 py-2 text-white"
            >
              Ver detalhes
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
