import { CaseStudySection } from "@/components/ui/CaseStudy/case-study-section";
import CustomImage from "@/components/ui/Image";

export default function IFreteCaseStudy() {
  return (
    <main className="container mx-auto py-12 md:py-16">
      {/* Project Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary">iFrete</h1>
        <p className="text-xl text-muted-foreground mb-6">
        O iFrete é uma plataforma digital desenvolvida para simplificar o transporte de móveis e itens volumosos, oferecendo uma alternativa acessível e eficiente aos serviços tradicionais de frete. O projeto foi criado com foco na experiência do usuário, garantindo uma navegação intuitiva, transparência nos preços e um fluxo de agendamento rápido, inspirado na usabilidade de apps de ride-sharing.
        </p>
      </div>

      <div className="flex justify-center gap-4 my-4">
        <CustomImage src="/images/imagem9.png" alt="Imagem adicional 1" width={400} height={250} className="rounded-lg shadow-md" />
        <CustomImage src="/images/imagem10.png" alt="Imagem adicional 2" width={400} height={250} className="rounded-lg shadow-md" />
        <CustomImage src="/images/imagem13.png" alt="Imagem adicional 2" width={400} height={250} className="rounded-lg shadow-md" />
      </div>

      {/* Challenge and Research */}
      <CaseStudySection title="Desafio" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Os serviços de transporte de móveis geralmente são caros e pouco acessíveis para mudanças pequenas. Os usuários enfrentam dificuldades com a falta de opções rápidas e econômicas, além de problemas com transparência de preços e rastreamento. O desafio era desenvolver uma solução que resolvesse essas dores e tornasse o transporte mais acessível e confiável.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 text-primary">Pesquisa & Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">Acessibilidade</h4>
                <p className="text-sm text-gray-600">Dificuldade em encontrar serviços acessíveis para pequenas mudanças.</p>
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">Preço/Entrega</h4>
                <p className="text-sm text-gray-600">Falta de previsibilidade de preços e tempo de entrega.</p>
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">Segurança</h4>
                <p className="text-sm text-gray-600">Preocupação com a segurança dos itens transportados.</p>
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
              Desenvolvi wireframes de baixa e alta fidelidade para garantir um fluxo intuitivo.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 text-primary">UI Design</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              O design seguiu uma abordagem minimalista, focada na clareza e facilidade de uso, com um esquema de cores que transmite confiança e modernidade.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* Tests and Improvements */}
      <CaseStudySection title="Testes & Iterações" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Após a criação do protótipo, realizei testes de usabilidade para validar a navegação e resolver possíveis dificuldades dos usuários. <br />Ajustes foram feitos para melhorar a clareza dos botões de ação, simplificar o checkout e tornar o rastreamento mais intuitivo.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* Final Solution and Learnings */}
      <CaseStudySection title="Solução Final & Impacto" className="border-t py-10 bg-gray-50 shadow-md rounded-lg text-center">
        <div className="space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              A versão final do iFrete oferece uma experiência de usuário otimizada, incluindo:
              <br /> Agendamento rápido e transparente, com estimativa de preço antes da confirmação. <br />Rastreamento em tempo real, garantindo mais segurança para o usuário.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </main>
  );
}
