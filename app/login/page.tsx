
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Login() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [cadastro, setCadastro] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const resultado = cadastro
        ? await authClient.signUp.email({
            name: nome,
            email,
            password: senha,
          })
        : await authClient.signIn.email({
            email,
            password: senha,
          });

      if (resultado.error) {
        setErro(resultado.error.message || "Falha na autenticação");
      } else {
        router.push("/catalogo");
        router.refresh();
      }
    } catch {
      setErro("Não foi possível conectar ao servidor");
    } finally {
      setCarregando(false);
    }
  }

  if (session) {
    return (
      <main className="min-h-screen bg-amber-50 p-8 text-zinc-900">
        <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow">
          <h1 className="text-2xl font-bold">Minha conta</h1>
          <p className="my-5">{session.user.email}</p>
          <button
            className="rounded bg-zinc-900 px-5 py-3 text-white"
            onClick={async () => {
              await authClient.signOut();
              router.refresh();
            }}
          >
            Sair da conta
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50 p-6 text-zinc-900">
      <form
        onSubmit={enviar}
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-8 shadow"
      >
        <h1 className="text-3xl font-bold">
          {cadastro ? "Criar conta" : "Entrar no brechó"}
        </h1>

        {cadastro && (
          <input
            className="w-full rounded border p-3"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        )}

        <input
          type="email"
          className="w-full rounded border p-3"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full rounded border p-3"
          placeholder="Senha (mínimo 8 caracteres)"
          minLength={8}
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p role="alert" className="text-red-600">{erro}</p>}

        <button
          disabled={carregando}
          className="w-full rounded bg-zinc-900 p-3 text-white disabled:opacity-50"
        >
          {carregando
            ? "Processando..."
            : cadastro ? "Cadastrar" : "Entrar"}
        </button>

        <button
          type="button"
          onClick={() => {
            setCadastro(!cadastro);
            setErro("");
          }}
          className="w-full text-center underline"
        >
          {cadastro ? "Já tenho conta" : "Criar uma conta"}
        </button>
      </form>
    </main>
  );
}
