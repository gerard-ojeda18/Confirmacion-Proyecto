"use client"

import { useState } from "react"
import { CoverPage } from "@/components/document/cover-page"
import { ProjectConfirmation } from "@/components/document/project-confirmation"
import { AccountStatement } from "@/components/document/account-statement"
import { Timeline } from "@/components/document/timeline"
import { SupportSection } from "@/components/document/support-section"
import { ClausesSectionInteractive } from "@/components/document/clauses-section-interactive"
import { CorporateFooter } from "@/components/document/corporate-footer"
import { PrintButton } from "@/components/document/print-button"

// Configuración del proyecto - Editar estos valores para cada cliente
const PROJECT_CONFIG = {
  clientName: "Juan Pérez",
  projectName: "Landing Page Corporativa",
  documentDate: "11 de Mayo, 2026",
  deliveryDays: 3,
  platform: "Next.js + Vercel",
  features: [
    "Diseño responsive optimizado para móviles",
    "Optimización SEO avanzada",
    "Formulario de contacto integrado",
    "Integración con Google Analytics",
    "Certificado SSL incluido",
    "Hosting en Vercel incluido"
  ],
  payments: [
    { concept: "Anticipo - 50% del proyecto", status: "paid" as const },
    { concept: "Saldo final - 50% contra entrega", status: "pending" as const }
  ],
  // Configuración de contacto InstaWeb
  whatsappNumber: "5491176351430", // Número de WhatsApp de InstaWeb (sin + ni espacios)
  email: "contacto@instaweb.com",
  phone: "+54 9 11 7635-1430",
  website: "www.instaweb.com.ar",
  address: "Buenos Aires, Argentina"
}

export default function DocumentPage() {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirmed = () => {
    setIsConfirmed(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Print Button - Hidden when printing, disabled until confirmed */}
      <PrintButton isEnabled={isConfirmed} />
      
      {/* Document Container - A4 optimized */}
      <div className="w-full max-w-[210mm] mx-auto shadow-2xl print:shadow-none print:max-w-none">
        
        {/* Page 1: Cover */}
        <div className="page-break">
          <CoverPage 
            clientName={PROJECT_CONFIG.clientName}
            projectName={PROJECT_CONFIG.projectName}
            documentDate={PROJECT_CONFIG.documentDate}
          />
        </div>
        
        {/* Page 2: Project Confirmation */}
        <div className="page-break">
          <ProjectConfirmation
            clientName={PROJECT_CONFIG.clientName}
            projectType={PROJECT_CONFIG.projectName}
            deliveryDays={PROJECT_CONFIG.deliveryDays}
            platform={PROJECT_CONFIG.platform}
            features={PROJECT_CONFIG.features}
          />
        </div>
        
        {/* Page 3: Account Statement */}
        <div className="page-break">
          <AccountStatement
            payments={PROJECT_CONFIG.payments}
          />
        </div>
        
        {/* Page 4: Timeline */}
        <div className="page-break">
          <Timeline />
        </div>
        
        {/* Page 5: Support */}
        <div className="page-break">
          <SupportSection />
        </div>
        
        {/* Page 6: Clauses with Confirmation Button */}
        <div className="page-break">
          <ClausesSectionInteractive
            clientName={PROJECT_CONFIG.clientName}
            projectName={PROJECT_CONFIG.projectName}
            onConfirmed={handleConfirmed}
            whatsappNumber={PROJECT_CONFIG.whatsappNumber}
          />
        </div>
        
        {/* Corporate Footer */}
        <CorporateFooter
          email={PROJECT_CONFIG.email}
          phone={PROJECT_CONFIG.phone}
          website={PROJECT_CONFIG.website}
          address={PROJECT_CONFIG.address}
        />
      </div>
    </main>
  )
}
