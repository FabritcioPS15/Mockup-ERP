import { Card, Stat } from '@/components/ui-primitives'

export default function ReturnsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Devoluciones</h1>
        <p className="text-muted-foreground">Gestión de devoluciones a proveedores.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Devoluciones Activas" value="1" />
        <Stat label="Procesadas (Mes)" value="4" />
        <Stat label="Reembolsos Pendientes" value="1" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de devoluciones en desarrollo.</p>
      </Card>
    </div>
  )
}
