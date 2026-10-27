
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const produtos = await prisma.produto.findMany({
      orderBy: { id: "asc" },
    });

    return NextResponse.json(produtos);
  } catch (error) {
    console.error("Erro ao consultar produtos:", error);

    return NextResponse.json(
      { erro: "Falha ao consultar o banco de dados" },
      { status: 500 }
    );
  }
}
