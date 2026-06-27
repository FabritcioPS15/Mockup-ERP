import { Card, Stat } from '@/components/ui-primitives'

export default function RoutesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Rutas</h1>
        <p className="text-muted-foreground">Planificación y optimización de rutas.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Rutas Activas" value="8" />
        <Stat label="Zonas de Cobertura" value="14" />
        <Stat label="Alertas de Ruta" value="0" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Mapa y planificación de rutas en desarrollo.</p>
      </Card>
    </div>
  )
}
