import { CaseStudySection } from "@/components/ui/CaseStudy/case-study-section";

export default function IFreteCaseStudy() {
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

      {/* Design Process */}
      <CaseStudySection title="Processo de Design" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-12">

          <div>
            <h3 className="text-2xl font-medium mb-6 text-primary">Wireframes & Protótipos</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Desenvolvi uma estrutura clara e funcional, priorizando
            fácil navegação.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-6 text-primary">UI Design</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A identidade visual enfatiza cores naturais e orgânicas, transmitindo a
            proposta sustentável da marca.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-6 text-primary">Jornada do Usuário</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Estruturei a experiência de compra de forma intuitiva,
            reduzindo cliques desnecessários até a finalização da compra.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* Tests and Improvements */}
      <CaseStudySection title="Testes & Iterações" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Testes de usabilidade revelaram a necessidade de:
            <br />
            Melhorar a visibilidade de ingredientes e selos de qualidade.
            <br/>
            Ajustar o layout do checkout para minimizar distrações e acelerar a finalização da
            compra.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* Final Solution and Learnings */}
      <CaseStudySection title="Solução Final & Impacto" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Catálogo visualmente atrativo, com descrições detalhadas.
            <br />
            Checkout otimizado, reduzindo a taxa de abandono de carrinho.
            <br />
            Seção de receitas e blog, aumentando o engajamento e reforçando o valor da marca.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </main>
  );
}
