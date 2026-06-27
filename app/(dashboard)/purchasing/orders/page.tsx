import { Card, Stat } from '@/components/ui-primitives'

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Órdenes de Compra</h1>
        <p className="text-muted-foreground">Gestión de órdenes de compra.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Total Órdenes" value="28" />
        <Stat label="En Tránsito" value="5" />
        <Stat label="Completadas" value="23" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de órdenes en desarrollo.</p>
      </Card>
    </div>
  )
}
