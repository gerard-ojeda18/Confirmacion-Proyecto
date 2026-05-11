import { DocumentHeader } from "./document-header"
import { Headphones, Clock, Shield, MessageSquare } from "lucide-react"

interface SupportFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export function SupportSection() {
  const supportFeatures: SupportFeature[] = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "3 Meses de Soporte Gratuito",
      description: "Incluimos 3 meses de soporte técnico sin costo adicional para ajustes menores, corrección de errores y consultas generales."
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Atención Personalizada",
      description: "Canal de comunicación directo vía WhatsApp para respuestas rápidas y seguimiento de solicitudes."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Garantía de Funcionamiento",
      description: "Garantizamos el correcto funcionamiento de todas las funcionalidades acordadas durante el período de soporte."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Capacitación Incluida",
      description: "Sesión de capacitación para el manejo del sitio web y documentación de uso básico."
    }
  ]
  
  return (
    <section className="min-h-[297mm] w-full flex flex-col bg-background">
      <DocumentHeader />
      
      <div className="flex-1 px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Soporte y Garantía</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        
        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* What's Included */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            El Soporte Gratuito Incluye
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground">
            {[
              "Corrección de errores de funcionamiento",
              "Ajustes menores de texto y contenido",
              "Actualización de información de contacto",
              "Soporte técnico vía WhatsApp",
              "Monitoreo básico de disponibilidad",
              "Respaldo mensual del sitio"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* What's NOT Included */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-destructive-foreground uppercase tracking-widest mb-4">
            No Incluido en Soporte Gratuito
          </h3>
          <ul className="grid grid-cols-1 gap-3 text-sm text-foreground">
            {[
              "Nuevas funcionalidades o secciones",
              "Rediseños completos",
              "Integraciones externas nuevas",
              "Creación de contenido/copywriting",
              "Migraciones o cambios de infraestructura solicitados por el cliente"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Page Number */}
      <div className="px-8 py-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Soporte y Garantía</span>
          <span>Página 5 de 6</span>
        </div>
      </div>
    </section>
  )
}
