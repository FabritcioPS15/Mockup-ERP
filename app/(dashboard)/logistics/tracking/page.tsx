import { Card, Stat } from '@/components/ui-primitives'

export default function TrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Seguimiento</h1>
        <p className="text-muted-foreground">Monitoreo en tiempo real de operaciones logísticas.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Unidades Monitoreadas" value="42" />
        <Stat label="Retrasos Detectados" value="2" />
        <Stat label="A Tiempo" value="95%" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Panel de seguimiento y mapa en desarrollo.</p>
      </Card>
    </div>
  )
}
