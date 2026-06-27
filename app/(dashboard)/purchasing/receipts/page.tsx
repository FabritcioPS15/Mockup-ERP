import { Card, Stat } from '@/components/ui-primitives'

export default function ReceiptsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Recepción de Mercadería</h1>
        <p className="text-muted-foreground">Gestión de recepción de mercadería.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Pendientes de Recepción" value="8" />
        <Stat label="Recibidos Hoy" value="2" />
        <Stat label="Incidencias" value="0" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de recepciones en desarrollo.</p>
      </Card>
    </div>
  )
}
