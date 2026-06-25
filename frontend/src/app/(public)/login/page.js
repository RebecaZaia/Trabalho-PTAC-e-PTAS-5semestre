"use client"; // ← torna o componente interativo no browser

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Page() {
  // Estado dos campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // impede o comportamento padrão do form (reload da página)
    setError("");
    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Email ou senha inválidos.");
      return;
    }

    router.push("/dashboard"); // redireciona após login com sucesso

    /*const res = await fetch("http://localhost:5500/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
      }),
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Erro ao fazer login");
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/dashboard");

    setLoading(false);

    if (error) {
      setError("Email ou senha inválidos.");
      return;
    }

    router.push("/dashboard"); // redireciona após login com sucesso*/
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-100">
      <div className="w-full max-w-3xl py-10 px-16 bg-green-200 dark:bg-black p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">
            Entrar
        </h2>
        <div className="flex flex-col gap-6">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>

                {/* Mensagem de erro */}
                {error && (
                  <p className="text-sm text-red-500 text-center mb-2">{error}</p>
                )}

                <Field>
                  <FieldLabel htmlFor="email" className="text-gray-700">Identificação de usuário</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    className="bg-white border-green-700"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password" className="text-gray-700">Senha</FieldLabel>
                  </div>
                  <Input 
                      id="password" 
                      type="password" 
                      placeholder="Insira sua senha"
                      className="bg-white border-green-700" 
                      required
                      
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <a href="#" className="text-gray-700 ml-auto text-sm underline-offset-4 hover:underline flex justify-end">
                      Esqueceu sua senha?
                  </a>
                </Field>
                <Field>
                  <Button type="submit" disabled={loading} className="bg-green-600 text-white hover:bg-green-700">
                    {loading ? "Entrando..." : "Acessar"}
                  </Button>
                  <Button variant="outline" type="button" className="bg-white border border-green-700 text-green-900">
                    Entrar com o Google
                  </Button>
                  <FieldDescription className="text-center text-green-700">
                    Ainda não possui uma conta? <a href="/cadastrar" className="text-green-700 font-semibold">Cadastre-se</a>
                  </FieldDescription>
                  <FieldDescription className="text-center text-green-700">
                    <Link href="/" className="text-green-700 font-semibold">
                      Continuar como visitante
                    </Link>
                  </FieldDescription>
                  <FieldDescription className="px-6 text-center">
                    Ao clicar em continuar, você concorda com nossos{" "}
                    <a href="#">Termos de Serviços</a> e{" "}
                    <a href="#">Política de Privacidade</a>.
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </div>
      </div>
    </div>
  )
}