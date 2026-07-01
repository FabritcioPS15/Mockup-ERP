export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
          <p className="text-muted-foreground mt-1">
            Configuraciones generales del sistema.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm p-8 text-center text-muted-foreground">
        <p>El módulo de configuración está en desarrollo.</p>
      </div>
    </div>
  )
}
