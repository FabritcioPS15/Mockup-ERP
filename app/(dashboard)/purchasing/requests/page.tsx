import { Card, Stat } from '@/components/ui-primitives'

export default function RequestsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Solicitudes de Compra</h1>
        <p className="text-muted-foreground">Gestión de solicitudes de compra.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Total Solicitudes" value="45" />
        <Stat label="Pendientes" value="12" />
        <Stat label="Aprobadas" value="33" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de solicitudes en desarrollo.</p>
      </Card>
    </div>
  )
}
