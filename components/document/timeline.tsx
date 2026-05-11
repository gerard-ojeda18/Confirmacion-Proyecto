import { DocumentHeader } from "./document-header"
import { Circle, CheckCircle2 } from "lucide-react"

interface TimelineItem {
  day: number
  title: string
  description: string
  status: "completed" | "current" | "pending"
}

interface TimelineProps {
  items?: TimelineItem[]
}

export function Timeline({
  items = [
    {
      day: 0,
      title: "Recepción de Materiales",
      description: "El cliente envía todos los contenidos, imágenes, textos y accesos necesarios para comenzar el desarrollo.",
      status: "completed"
    },
    {
      day: 1,
      title: "Diseño y Maquetación",
      description: "Creación del diseño visual, estructura de navegación y maquetación responsive del sitio web.",
      status: "current"
    },
    {
      day: 2,
      title: "Desarrollo y Funcionalidades",
      description: "Implementación de funcionalidades, formularios, integraciones y optimización de rendimiento.",
      status: "pending"
    },
    {
      day: 3,
      title: "Revisión y Entrega",
      description: "Pruebas finales, ajustes según feedback del cliente y entrega del proyecto finalizado.",
      status: "pending"
    }
  ]
}: TimelineProps) {
  return (
    <section className="min-h-[297mm] w-full flex flex-col bg-background">
      <DocumentHeader />
      
      <div className="flex-1 px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Cronograma del Proyecto</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Icon */}
                <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  item.status === "completed" 
                    ? "bg-green-500/20 border-green-500" 
                    : item.status === "current"
                    ? "bg-primary/20 border-primary"
                    : "bg-secondary border-border"
                }`}>
                  {item.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className={`w-6 h-6 ${item.status === "current" ? "text-primary" : "text-muted-foreground"}`} />
                  )}
                </div>
                
                {/* Content */}
                <div className={`flex-1 bg-card border rounded-lg p-6 ${
                  item.status === "current" ? "border-primary" : "border-border"
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      item.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "current"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {item.day === 0 ? "Inicio" : `Día ${item.day}`}
                    </span>
                    <span className={`text-xs uppercase tracking-widest ${
                      item.status === "completed"
                        ? "text-green-400"
                        : item.status === "current"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}>
                      {item.status === "completed" ? "Completado" : item.status === "current" ? "En Progreso" : "Pendiente"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Page Number */}
      <div className="px-8 py-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Cronograma del Proyecto</span>
          <span>Página 4 de 6</span>
        </div>
      </div>
    </section>
  )
}
