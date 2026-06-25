"use client";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Validação no cliente — antes de ir ao servidor
    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      cpf,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Erro ao criar conta. Verifique os dados e tente novamente.");
      return;
    }

    router.push("/dashboard");
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-100">
      <main className="w-full max-w-3xl py-10 px-16 bg-green-200 dark:bg-black p-8 rounded-2xl shadow-md">
         <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">
          Cadastrar
        </h2>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {error && (
                <p className="text-sm text-red-500 text-center mb-2">{error}</p>
              )}

              <Field>
                <FieldLabel htmlFor="name" className="text-gray-700">
                  Nome
                </FieldLabel>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Insira seu nome completo" 
                  className="border bg-white border-green-700" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="CPF" className="text-gray-700">
                  CPF
                </FieldLabel>
                <Input
                  id="CPF"
                  type="text"
                  placeholder="000.000.000-00"
                  className="border bg-white border-green-700"
                  required
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email" className="text-gray-700">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Insira seu E-mail institucional"
                  className="border bg-white border-green-700" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password" className="text-gray-700">
                  Senha
                </FieldLabel>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="Crie sua senha"
                  className="border bg-white border-green-700" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password" className="text-gray-700">
                  Confirmar Senha
                </FieldLabel>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Repita sua senha"
                  className="border bg-white border-green-700" 
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Field>
              <FieldGroup>
                <Field>
                  <Button type="submit" disabled={loading} className="bg-green-600 text-white hover:bg-green-700">
                    {loading ? "Criando conta..." : "Criar Conta"}
                  </Button>
                  <FieldDescription className="px-6 text-center">
                    Já possui uma conta? <a href="/login" className="text-green-700 font-semibold">Entrar</a>
                  </FieldDescription>
                  <FieldDescription className="text-center text-green-700">
                    <Link href="/" className="text-green-700 font-semibold">
                      Continuar como visitante
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </main>
    </div>
  )
}