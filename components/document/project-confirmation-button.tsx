"use client"

import { useState } from "react"
import { Check, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectConfirmationButtonProps {
  clientName: string
  projectName: string
  onConfirmed: () => void
  whatsappNumber?: string
  email?: string
}

export function ProjectConfirmationButton({
  clientName,
  projectName,
  onConfirmed,
  whatsappNumber = "5491112345678", // Número de InstaWeb (sin + ni espacios)
  email = "contacto@instaweb.com"
}: ProjectConfirmationButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = async () => {
    setIsConfirming(true)
    
    // Crear mensaje de confirmación
    const message = `*CONFIRMACIÓN DE PROYECTO*%0A%0A` +
      `Cliente: ${clientName}%0A` +
      `Proyecto: ${projectName}%0A` +
      `Fecha: ${new Date().toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}%0A%0A` +
      `El cliente ha aceptado los términos y condiciones del proyecto.%0A%0A` +
      `_Confirmación enviada desde el documento digital de InstaWeb_`
    
    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    
    // Abrir en nueva ventana
    window.open(whatsappUrl, '_blank')
    
    // Simular delay para UX
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsConfirming(false)
    setIsConfirmed(true)
    onConfirmed()
  }

  if (isConfirmed) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-2">
          Proyecto Confirmado
        </h4>
        <p className="text-sm text-muted-foreground">
          Gracias por confirmar. Hemos recibido tu aceptación.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Confirmado el {new Date().toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    )
  }

  return (
    <div className="text-center py-6">
      <p className="text-sm text-muted-foreground mb-6">
        Al confirmar, acepta todos los términos y condiciones descritos en este documento.
        Se enviará una notificación a InstaWeb con su confirmación.
      </p>
      <Button
        onClick={handleConfirm}
        disabled={isConfirming}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
        size="lg"
      >
        {isConfirming ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando confirmación...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Confirmar Proyecto
          </>
        )}
      </Button>
    </div>
  )
}
