
import Link from "next/link";
import Image from "next/image";

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

export default function Catalogo() {
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
            <Image
              src={`/pecas/images${peca.id}.jpg`}
              alt={`Foto de ${peca.nome}`}
              width={600}
              height={600}
              className="h-56 w-full rounded object-contain"
            />

            <h2 className="mt-4 text-xl font-semibold">
              {peca.nome}
            </h2>

            <p>Tamanho: {peca.tamanho}</p>

            <p className="font-bold">
              {peca.preco !== null
                ? `R$ ${peca.preco.toFixed(2)}`
                : "Preço a definir"}
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
