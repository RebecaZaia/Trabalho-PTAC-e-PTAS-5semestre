import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  /*const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };*/
  return (
    <header className="bg-green-500 flex items-center justify-between px-6 py-3">

      <div className="relative w-40 h-20">
        <Image
          src="/Instituto-Federal-de-Mato-Grosso-do-Sul-IFMS-Logo.png"
          alt="Logo IFMS"
          fill
          className="object-contain"
        />
      </div>

      <ButtonGroup>
        <Input id="input-button-group" className="w-2xl bg-white" placeholder="Digite para pesquisar..." />
        <Button variant="outline">🔍</Button>
      </ButtonGroup>

      <div className="flex items-center gap-4 text-white">
        <Tabs defaultValue="overview">
          <TabsList variant="line">
            <TabsTrigger value="overview"  className="text-white">categ ex1</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">categ ex2</TabsTrigger>
            <TabsTrigger value="reports" className="text-white">categ ex3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>  
      <div className="flex items-center gap-4 text-white">
        <Bell />

        <Button className="bg-green-700 hover:bg-green-800">
          <a href="/login">
            Entrar
          </a>
        </Button>
        {/*<Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={handleToggleTheme}
            aria-label="Alternar tema"
          >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300 ease-out dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-300 ease-out dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>*/}
      </div>
    </header>
  );
}