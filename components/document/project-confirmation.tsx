import { DocumentHeader } from "./document-header"
import { CheckCircle2 } from "lucide-react"

interface ProjectDetails {
  clientName?: string
  projectType?: string
  deliveryDays?: number
  platform?: string
  features?: string[]
}

export function ProjectConfirmation({
  clientName = "Juan Pérez",
  projectType = "Landing Page Corporativa",
  deliveryDays = 3,
  platform = "Next.js + Vercel",
  features = [
    "Diseño responsive optimizado para móviles",
    "Optimización SEO avanzada",
    "Formulario de contacto integrado",
    "Integración con Google Analytics",
    "Certificado SSL incluido",
    "Panel de administración básico"
  ]
}: ProjectDetails) {
  return (
    <section className="min-h-[297mm] w-full flex flex-col bg-background">
      <DocumentHeader />
      
      <div className="flex-1 px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Confirmación de Proyecto</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        
        {/* Project Summary */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Resumen del Proyecto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Cliente</p>
              <p className="text-lg font-medium text-foreground">{clientName}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tipo de Proyecto</p>
              <p className="text-lg font-medium text-foreground">{projectType}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tiempo de Entrega</p>
              <p className="text-lg font-medium text-foreground">{deliveryDays} días hábiles</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Plataforma</p>
              <p className="text-lg font-medium text-foreground">{platform}</p>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Características Incluidas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Regla de Oro
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            El plazo de entrega de <strong className="text-primary">{deliveryDays} días hábiles</strong> comienza 
            a partir de la recepción completa de todos los materiales necesarios por parte del cliente 
            (contenido, imágenes, textos, accesos, etc.). Cualquier retraso en la entrega de materiales 
            extenderá proporcionalmente el plazo de entrega final.
          </p>
        </div>
      </div>
      
      {/* Page Number */}
      <div className="px-8 py-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Confirmación de Proyecto</span>
          <span>Página 2 de 6</span>
        </div>
      </div>
    </section>
  )
}
