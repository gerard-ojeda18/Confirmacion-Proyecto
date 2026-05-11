import { DocumentHeader } from "./document-header"

interface Clause {
  number: number
  title: string
  content: string
}

interface ClausesSectionProps {
  clauses?: Clause[]
}

export function ClausesSection({
  clauses = [
    {
      number: 1,
      title: "Objeto del Contrato",
      content: "InstaWeb se compromete a desarrollar y entregar el sitio web según las especificaciones acordadas en este documento, utilizando tecnologías modernas y siguiendo las mejores prácticas de desarrollo."
    },
    {
      number: 2,
      title: "Plazos de Entrega",
      content: "El plazo de entrega establecido comenzará a computarse a partir de la recepción completa de todos los materiales necesarios por parte del cliente. Cualquier demora en la entrega de materiales por parte del cliente extenderá proporcionalmente el plazo de entrega."
    },
    {
      number: 3,
      title: "Condiciones de Pago",
      content: "El cliente deberá abonar el 50% del monto total como anticipo para iniciar el proyecto. El 50% restante deberá ser abonado al momento de la entrega final, antes de la publicación del sitio."
    },
    {
      number: 4,
      title: "Propiedad Intelectual",
      content: "Una vez completado el pago total, el cliente adquiere los derechos sobre el diseño y código desarrollado específicamente para su proyecto. InstaWeb conserva el derecho de utilizar el proyecto como referencia en su portafolio."
    },
    {
      number: 5,
      title: "Revisiones y Modificaciones",
      content: "El proyecto incluye hasta 2 rondas de revisiones menores. Modificaciones adicionales o cambios sustanciales al alcance original serán cotizados por separado."
    },
    {
      number: 6,
      title: "Cancelación",
      content: "En caso de cancelación por parte del cliente, el anticipo no será reembolsable. Si la cancelación ocurre después del 50% del avance, el cliente deberá abonar el porcentaje proporcional al trabajo realizado."
    }
  ]
}: ClausesSectionProps) {
  return (
    <section className="min-h-[297mm] w-full flex flex-col bg-background">
      <DocumentHeader />
      
      <div className="flex-1 px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Términos y Condiciones</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        
        {/* Clauses */}
        <div className="space-y-6 mb-8">
          {clauses.map((clause) => (
            <div key={clause.number} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                  {clause.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{clause.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{clause.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Signature Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6 text-center">
            Aceptación del Acuerdo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="border-b border-border pb-2 mb-2 h-16" />
              <p className="text-sm text-muted-foreground">Firma del Cliente</p>
              <p className="text-xs text-muted-foreground mt-1">Fecha: _______________</p>
            </div>
            <div className="text-center">
              <div className="border-b border-border pb-2 mb-2 h-16" />
              <p className="text-sm text-muted-foreground">InstaWeb</p>
              <p className="text-xs text-muted-foreground mt-1">Fecha: _______________</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Page Number */}
      <div className="px-8 py-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Términos y Condiciones</span>
          <span>Página 6 de 6</span>
        </div>
      </div>
    </section>
  )
}
