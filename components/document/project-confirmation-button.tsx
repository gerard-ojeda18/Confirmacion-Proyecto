"use client"

import { useState } from "react"
import { Check, Loader2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectConfirmationButtonProps {
  clientName: string
  projectName: string
  onConfirmed: () => void
}

export function ProjectConfirmationButton({
  clientName,
  projectName,
  onConfirmed
}: ProjectConfirmationButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirm = async () => {
    setIsConfirming(true)
    setError(null)
    
    const confirmationDate = new Date().toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    try {
      const response = await fetch('/api/confirm-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName,
          projectName,
          confirmationDate,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar confirmación')
      }

      setIsConfirmed(true)
      onConfirmed()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar confirmación. Intente nuevamente.')
    } finally {
      setIsConfirming(false)
    }
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
        <p className="text-xs text-green-500 mt-2">
          Se ha enviado la confirmación con exito a InstaWeb
        </p>
      </div>
    )
  }

  return (
    <div className="text-center py-6">
      <p className="text-sm text-muted-foreground mb-6">
        Al confirmar, acepta todos los términos y condiciones descritos en este documento.
        Se enviará una notificación de confirmación a InstaWeb.
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}
      
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
            <Mail className="w-5 h-5 mr-2" />
            Confirmar Proyecto
          </>
        )}
      </Button>
    </div>
  )
}
