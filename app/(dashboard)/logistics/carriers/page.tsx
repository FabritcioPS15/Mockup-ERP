import { Card, Stat } from '@/components/ui-primitives'

export default function CarriersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Transportistas</h1>
        <p className="text-muted-foreground">Directorio y gestión de transportistas.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Total Transportistas" value="15" />
        <Stat label="Activos" value="12" />
        <Stat label="Flota Disponible" value="28" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Directorio de transportistas en desarrollo.</p>
      </Card>
    </div>
  )
}
