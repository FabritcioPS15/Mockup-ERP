import { Card, Stat } from '@/components/ui-primitives'

export default function DispatchesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Despachos</h1>
        <p className="text-muted-foreground">Gestión de despachos de mercadería.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Despachos Hoy" value="24" />
        <Stat label="En Proceso" value="5" />
        <Stat label="Completados" value="19" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de despachos en desarrollo.</p>
      </Card>
    </div>
  )
}
