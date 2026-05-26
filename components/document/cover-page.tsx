import Image from "next/image"

interface CoverPageProps {
  clientName?: string
  projectName?: string
  documentDate?: string
}

export function CoverPage({ 
  clientName = "Gustavo Nicolas", 
  projectName = "Joyería biarritz",
  documentDate = "26 de Mayo, 2026"
}: CoverPageProps) {
  return (
    <section className="min-h-[297mm] w-full flex flex-col bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <Image
          src="/images/instaweb-logo.png"
          alt="InstaWeb Logo"
          width={280}
          height={100}
          className="object-contain mb-12"
        />
        
        <div className="w-24 h-0.5 bg-primary mb-12" />
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
          Confirmación de Proyecto
        </h1>
        
        <p className="text-lg text-muted-foreground text-center mb-16">
          Documento Oficial de Acuerdo Comercial
        </p>
        
        <div className="bg-card border border-border rounded-lg p-8 w-full max-w-md">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Cliente</p>
              <p className="text-xl font-semibold text-foreground">{clientName}</p>
            </div>
            <div className="w-full h-px bg-border" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Proyecto</p>
              <p className="text-xl font-semibold text-primary">{projectName}</p>
            </div>
            <div className="w-full h-px bg-border" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Fecha de Emisión</p>
              <p className="text-lg text-foreground">{documentDate}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-8 py-6 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>InstaWeb - Páginas que generan resultados</span>
          <span>www.instaweb.com.ar</span>
        </div>
      </div>
    </section>
  )
}
