import { DocumentHeader } from "./document-header"

interface PaymentItem {
  concept: string
  status: "paid" | "pending"
}

interface AccountStatementProps {
  payments?: PaymentItem[]
}

export function AccountStatement({
  payments = [
    { concept: "Anticipo - 50% del proyecto", status: "paid" },
    { concept: "Saldo final - 50% contra entrega", status: "pending" }
  ]
}: AccountStatementProps) {
  return (
    <section className="min-h-[297mm] w-full flex flex-col bg-background">
      <DocumentHeader />
      
      <div className="flex-1 px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Estado de Cuenta</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        
        {/* Payment Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Concepto
                </th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="px-6 py-4 text-sm text-foreground">{payment.concept}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      payment.status === "paid" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {payment.status === "paid" ? "Pagado" : "Pendiente"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Payment Methods */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Métodos de Pago Aceptados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Transferencia Bancaria", "Mercado Pago", "Efectivo"].map((method, index) => (
              <div key={index} className="bg-secondary rounded-lg p-3 text-center">
                <p className="text-sm text-foreground">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Page Number */}
      <div className="px-8 py-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Estado de Cuenta</span>
          <span>Página 3 de 6</span>
        </div>
      </div>
    </section>
  )
}
