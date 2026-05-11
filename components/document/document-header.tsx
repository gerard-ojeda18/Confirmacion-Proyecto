import Image from "next/image"

interface DocumentHeaderProps {
  documentNumber?: string
  date?: string
}

export function DocumentHeader({ documentNumber = "IW-2024-0847", date = "11 de Mayo, 2026" }: DocumentHeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-border">
      <div className="flex items-center gap-4">
        <Image
          src="/images/instaweb-logo.png"
          alt="InstaWeb Logo"
          width={140}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="text-right">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Documento No.</p>
        <p className="text-sm font-semibold text-primary">{documentNumber}</p>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
      </div>
    </header>
  )
}
