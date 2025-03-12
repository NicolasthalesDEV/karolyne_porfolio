import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutPage() {
  // Skills data
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Design Systems"] },
    { category: "Tools", items: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"] }
  ]

  return (
    <main className="max-w-full mx-auto bg-white rounded-lg pt-5">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 pt-5">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Sobre Mim | Minha Jornada no Design</h1>
      </div>

      {/* Profile Section */}
      <section className="max-w-4xl mx-auto rounded-lg pb-5">
        <div className="flex justify-center">
          <p className="text-lg mb-6 text-center">
          Minha jornada no design começou com a vontade de entender como
          as pessoas interagem com a tecnologia e como podemos melhorar essa experiência. Ao
          longo da minha carreira, atuei em UX/UI, pesquisa de usuários e gestão de produto,
          aprimorando habilidades em prototipação, arquitetura da informação e usabilidade. Sou
          apaixonada por design centrado no usuário e sempre busco formas de criar produtos
          digitais que sejam funcionais, acessíveis e engajadores.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Habilidades & Experiências</h2>
        <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-lg flex flex-col gap-4">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

