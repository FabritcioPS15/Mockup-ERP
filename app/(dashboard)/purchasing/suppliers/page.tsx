import { Card, Stat } from '@/components/ui-primitives'

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Proveedores</h1>
        <p className="text-muted-foreground">Gestión de proveedores.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Total Proveedores" value="12" />
        <Stat label="Nuevos (Mes)" value="3" />
        <Stat label="Activos" value="10" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de proveedores en desarrollo.</p>
      </Card>
    </div>
  )
}
