import { CaseStudySection } from "@/components/ui/CaseStudy/case-study-section";
import CustomImage from "@/components/ui/Image";
import { JSX } from "react";

export default function IFreteCaseStudy(): JSX.Element {
  return (
    <main className="container mx-auto py-12 md:py-16">
      {/* Project Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary">Verdano</h1>
        <p className="text-xl text-muted-foreground mb-6">
          O Verdano é um e-commerce criado para uma padaria vegana, com o objetivo de tornar a
          experiência de compra mais acessível e atrativa para quem busca produtos sustentáveis
          e saborosos.
        </p>

      </div>

      <div className="flex justify-center my-4">
              <CustomImage src="/images/imagem3.PNG" alt="Imagem adicional 1" width={400} height={250} className="rounded-lg shadow-md" />
      </div>

      {/* Challenge and Research */}
      <CaseStudySection title="Desafio" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              A principal dificuldade era criar uma plataforma que não apenas vendesse produtos,
              mas também fortalecesse a comunidade vegana, educando e inspirando clientes. O
              objetivo era garantir uma experiência de compra fluida, com uma interface amigável e
              estratégias para aumentar a conversão
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 text-primary">Pesquisa & Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">Busca de produtos</h4>
                <p className="text-sm text-gray-600">Dificuldade em encontrar produtos veganos saborosos e acessíveis.</p>
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">Ingredientes</h4>
                <p className="text-sm text-gray-600">Desejo por mais informações sobre ingredientes e valores nutricionais.</p>
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">Checkout</h4>
                <p className="text-sm text-gray-600">Necessidade de um checkout rápido e seguro.</p>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Imagens Adicionais */}

      {/* Remaining sections would follow here */}
    </main>
  );
}
