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
      <div className="w-full max-w-3xl py-10 px-16 bg-green-200 dark:bg-black p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">
            Entrar
        </h2>
        <div className="flex flex-col gap-6">
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="emailOrCpf" className="text-gray-700">Identificação de usuário</FieldLabel>
                  <Input
                    id="emailOrCpf"
                    type="text"
                    placeholder="E-mail ou CPF"
                    className="bg-white border-green-700"
                    required
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
                  />
                  <a href="#" className="text-gray-700 ml-auto text-sm underline-offset-4 hover:underline flex justify-end">
                      Esqueceu sua senha?
                  </a>
                </Field>
                <Field>
                  <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">Acessar</Button>
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
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </div>
      </div>
    </div>
  )
}

/*<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Instituto Federal</h1>
      <p className="text-gray-600">Mato Grosso do Sul</p>
    </div>
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-10 px-16 bg-green-100 dark:bg-black p-8 rounded-2xl shadow-md w-[350px]">
      <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">Entrar</h2>
      
      <form className="flex flex-col gap-4">
        <div>
          <label className="text-sm text-gray-700">Identificação de usuário</label>
          <input type="text" placeholder="E-mail ou CPF" className="w-full p-2 rounded-md border bg-white border-green-700"/>
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-gray-700">Senha</label>
          <input type="password" placeholder="Insira sua senha" className="w-full p-2 rounded-md border bg-white border-green-700"/>
          <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Esqueceu sua senha?</a>
        </div>
        <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Acessar</button>
        <button type="button" className="bg-white border py-2 rounded-md border-green-700 text-green-900">Entrar com o Google</button>
        <p className="text-sm text-center">
          Ainda não possui uma conta?{" "}
          <a href="/cadastrar" className="text-green-700 font-semibold">Cadastre-se</a>
        </p>
        <p className="text-sm text-center text-green-700">
          <Link href="/" className="text-green-700 font-semibold">Continuar como visitante</Link>
        </p>
      </form>
    </main>
  </div>
*/