"use client"

import { Printer, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PrintButtonProps {
  isEnabled: boolean
}

export function PrintButton({ isEnabled }: PrintButtonProps) {
  const handlePrint = () => {
    if (isEnabled) {
      window.print()
    }
  }
  
  if (!isEnabled) {
    return (
      <div className="fixed bottom-8 right-8 flex gap-3 no-print z-50">
        <Button
          disabled
          className="bg-muted text-muted-foreground cursor-not-allowed shadow-lg"
          size="lg"
        >
          <Lock className="w-5 h-5 mr-2" />
          Confirme el proyecto para descargar
        </Button>
      </div>
    )
  }
  
  return (
    <div className="fixed bottom-8 right-8 flex gap-3 no-print z-50">
      <Button
        onClick={handlePrint}
        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
        size="lg"
      >
        <Printer className="w-5 h-5 mr-2" />
        Imprimir / Exportar PDF
      </Button>
    </div>
  )
}
