export default function AdminSchedulesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Horarios</h1>
          <p className="text-muted-foreground mt-1">
            Administra los horarios de trabajo y turnos.
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          Crear Horario
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm p-8 text-center text-muted-foreground">
        <p>El módulo de horarios está en desarrollo.</p>
      </div>
    </div>
  )
}
