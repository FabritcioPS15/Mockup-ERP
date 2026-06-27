import { Card, Stat } from '@/components/ui-primitives'

export default function WaybillsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Guías</h1>
        <p className="text-muted-foreground">Administración de guías de remisión.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Guías Generadas" value="89" />
        <Stat label="Pendientes" value="12" />
        <Stat label="Anuladas" value="1" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de guías de remisión en desarrollo.</p>
      </Card>
    </div>
  )
}
