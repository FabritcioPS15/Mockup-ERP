'use client'

import { Card, Button, Input } from '@/components/ui-primitives'
import { Save, Settings, Database, Bell, Shield } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'Krea & Terra Hub',
    siteUrl: 'https://krea-terra.com',
    supportEmail: 'support@krea-terra.com',
    maxUsersPerTenant: '100',
    defaultPlan: 'Professional',
    sessionTimeout: '30',
    enableTwoFactor: true,
    enableAuditLog: true,
    maintenanceMode: false,
  })

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Configuración del Sistema</h1>
            <p className="text-muted-foreground mt-1">Configuración general del sistema multitenant</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Save size={18} />
            Guardar Cambios
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Settings size={20} className="text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Configuración General</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground">Nombre del Sitio</label>
                  <Input
                    value={settings.siteName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, siteName: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">URL del Sitio</label>
                  <Input
                    value={settings.siteUrl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, siteUrl: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email de Soporte</label>
                  <Input
                    value={settings.supportEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, supportEmail: e.target.value})}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Database size={20} className="text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Configuración Multitenant</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground">Máximo Usuarios por Tenant</label>
                  <Input
                    value={settings.maxUsersPerTenant}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, maxUsersPerTenant: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Plan Default</label>
                  <Input
                    value={settings.defaultPlan}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, defaultPlan: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Timeout de Sesión (minutos)</label>
                  <Input
                    value={settings.sessionTimeout}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, sessionTimeout: e.target.value})}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Seguridad</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Autenticación de Dos Factores</label>
                  <input
                    type="checkbox"
                    checked={settings.enableTwoFactor}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, enableTwoFactor: e.target.checked})}
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Log de Auditoría</label>
                  <input
                    type="checkbox"
                    checked={settings.enableAuditLog}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, enableAuditLog: e.target.checked})}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Bell size={20} className="text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Sistema</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Modo Mantenimiento</label>
                  <input
                    type="checkbox"
                    checked={settings.maintenanceMode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({...settings, maintenanceMode: e.target.checked})}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
