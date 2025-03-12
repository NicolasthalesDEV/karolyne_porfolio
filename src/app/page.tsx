import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomImage from "@/components/ui/Image";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary">Karolyne Costa</span> – Product Designer | UX/UI
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
        Sou UX/UI Design com experiencia em product design, pesquisa e estratégia digital. Meu foco é criar produtos intuitivos e eficientes, alinhando as necessidades dos usuários aos objetivos do negócio. Acredito que o design vai além da estética – ele deve resolver problemas, otimizar fluxos e proporcionar experiências impactantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button asChild size="lg">
            <Link href="/projects">
              Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Obter em um toque</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* iFrete Project Card */}
            <div className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <CustomImage
                  src="/images/imagem7.png"
                  alt="iFrete Project Preview"
                  width={1280}
                  height={720}
                  className="h-full w-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">iFrete</h3>
                <p className="text-muted-foreground mt-2">Aplicativo de transporte sob demanda para móveis e itens volumosos</p>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link href="/projects/ifrete">
                    Projeto completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Verdano Project Card */}
            <div className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <CustomImage
                  src="/images/imagem8.png"
                  alt="Verdano Project Preview"
                  width={1280}
                  height={720}
                  className="h-full w-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Verdano</h3>
                <p className="text-muted-foreground mt-2">E-commerce criado para uma padaria vegana</p>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link href="/projects/verdano">
                    Projeto completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">Ver todos os projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
