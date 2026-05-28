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

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-100">
      <main className="w-full max-w-3xl py-10 px-16 bg-green-200 dark:bg-black p-8 rounded-2xl shadow-md">
         <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">
          Cadastrar
        </h2>
        <CardContent>
          <form>
            <FieldGroup>
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
                />
              </Field>
              <FieldGroup>
                <Field>
                  <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">Criar Conta</Button>
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

/*<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Instituto Federal</h1>
      <p className="text-gray-600">Mato Grosso do Sul</p>
    </div>
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-10 px-16 bg-green-100 dark:bg-black p-8 rounded-2xl shadow-md w-[350px]">
      <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">Cadastrar</h2>
      <form className="flex flex-col gap-4">
        <div>
            <label className="text-sm text-gray-700">Nome</label>
            <input placeholder="Insira seu nome completo" className="w-full p-2 rounded-md border bg-white border-green-700" />
        </div>
        <div>
            <label className="text-sm text-gray-700">CPF</label>
            <input placeholder="Insira seu CPF" className="w-full p-2 rounded-md border bg-white border-green-700" />
        </div>
        <div>
          <label className="text-sm text-gray-700">E-mail</label>
          <input placeholder="Insira seu E-mail institucional" className="w-full p-2 rounded-md border bg-white border-green-700" />
        </div>
        <div>
          <label className="text-sm text-gray-700">Senha</label>
          <input type="password" placeholder="Insira sua senha" className="w-full p-2 rounded-md border bg-white border-green-700" />
        </div>
        <div>
          <label className="text-sm text-gray-700">Confirmar Senha</label>
          <input type="password" placeholder="Repita sua senha" className="w-full p-2 rounded-md border bg-white border-green-700" />
        </div>
        <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Acessar</button>
        <p className="text-sm text-center">
          Já possui uma conta?{" "}
          <a href="/login" className="text-green-700 font-semibold">Login</a>
        </p>
        <p className="text-sm text-center text-green-700">
          <Link href="/" className="text-green-700 font-semibold">Entrar como visitante</Link>
        </p>
      </form>
    </main>
  </div>*/