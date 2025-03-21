import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Links Rápidos */}
        <div>
          <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
          <nav className="flex flex-col space-y-2">
            {["Projects", "About", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contato</h3>
          <div className="flex space-x-4">
            <Link 
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors"
            >
            <Mail className="h-8 w-8"/>
            <span className="sr-only">Email</span>
            </Link>

            <a
            href="https://www.linkedin.com/in/karolyne-costa-3167a3208"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            >
            <Linkedin className="h-8 w-8"/>
            <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 pt-8 border-t text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfólio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
