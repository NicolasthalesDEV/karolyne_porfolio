import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomImage from '@/components/CustomImage';

const projects = [
  {
    id: "ifrete",
    title: "iFrete",
    description: "Aplicativo de transporte sob demanda para móveis e itens volumosos",
    image: "/images/imagem.png",
  },
  {
    id: "verdano",
    title: "Verdano",
    description: "E-commerce criado para uma padaria vegana",
    image: "/images/imagem2.png",
  },
];

export default function ProjectsPage(): JSX.Element {
  return (
    <main className="max-w-full mx-auto bg-gray-200 p-6 rounded-lg">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Meus projetos</h1>
        <p className="text-xl text-muted-foreground">
          Uma coleção dos meus trabalhos de design, estudos e explorações criativas.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <CustomImage
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} Project Preview`}
                width={1280}
                height={720}
                className="h-full w-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-center">{project.title}</h2>
              <p className="text-muted-foreground mt-2 text-center">{project.description}</p>
              <div className="flex justify-center mt-4">
                <Button asChild variant="link" className="p-0">
                  <Link href={`/projects/${project.id}`}>
                    Ver projeto completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
