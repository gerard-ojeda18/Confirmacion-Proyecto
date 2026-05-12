import Image from "next/image"
import { Mail, Phone, Globe, MapPin } from "lucide-react"

interface ContactInfo {
  email?: string
  phone?: string
  website?: string
  address?: string
}

export function CorporateFooter({
  email = "contacto@instaweb.com.ar",
  phone = "+1 (555) 123-4567",
  website = "www.instaweb.com.ar",
  address = "Ciudad de México, México"
}: ContactInfo) {
  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/instaweb-logo.png"
              alt="InstaWeb Logo"
              width={160}
              height={60}
              className="object-contain mb-2"
            />
            <p className="text-xs text-muted-foreground">Páginas que generan resultados</p>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground">{email}</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">Teléfono</p>
              <p className="text-sm text-foreground">{phone}</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">Web</p>
              <p className="text-sm text-foreground">{website}</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">Ubicación</p>
              <p className="text-sm text-foreground">{address}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="px-8 py-4 border-t border-border bg-secondary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 InstaWeb. Todos los derechos reservados.</p>
          <p>Documento generado el 11 de Mayo, 2026</p>
        </div>
      </div>
    </footer>
  )
}
