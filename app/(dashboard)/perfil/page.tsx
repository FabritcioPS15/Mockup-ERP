'use client'

import { useState } from 'react'
import { Card, Button, Input, Badge } from '@/components/ui-primitives'
import { User, Mail, Phone, MapPin, Lock, Bell, Globe, Shield, Camera, Save } from 'lucide-react'

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('personal')
  const [isEditing, setIsEditing] = useState(false)

  // Datos de ejemplo del usuario
  const [userData, setUserData] = useState({
    nombre: 'Juan Pérez',
    email: 'juan.perez@empresa.com',
    telefono: '+52 55 1234 5678',
    cargo: 'Gerente de Ventas',
    departamento: 'Ventas',
    ubicacion: 'Ciudad de México, México',
    bio: 'Profesional con más de 10 años de experiencia en gestión de ventas y relaciones con clientes.',
    avatar: '/placeholder-avatar.png'
  })

  const [preferences, setPreferences] = useState({
    tema: 'claro',
    idioma: 'es',
    zonaHoraria: 'America/Mexico_City',
    formatoFecha: 'DD/MM/YYYY'
  })

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
    seguridad: true,
    actualizaciones: true
  })

  const tabs = [
    { id: 'personal', label: 'Información Personal', icon: User },
    { id: 'seguridad', label: 'Seguridad', icon: Lock },
    { id: 'preferencias', label: 'Preferencias', icon: Globe },
    { id: 'notificaciones', label: 'Notificaciones', icon: Bell }
  ]

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Foto de perfil */}
      <Card>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-white">
              {userData.nombre.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground">{userData.nombre}</h3>
            <p className="text-muted-foreground">{userData.cargo}</p>
            <div className="mt-2">
              <Badge variant="success">Activo</Badge>
            </div>
          </div>
          <Button 
            variant={isEditing ? 'secondary' : 'primary'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancelar' : 'Editar Perfil'}
          </Button>
        </div>
      </Card>

      {/* Información personal */}
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Información Personal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Nombre Completo"
            value={userData.nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, nombre: e.target.value})}
            disabled={!isEditing}
          />
          <Input 
            label="Email"
            type="email"
            value={userData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, email: e.target.value})}
            disabled={!isEditing}
          />
          <Input 
            label="Teléfono"
            type="tel"
            value={userData.telefono}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, telefono: e.target.value})}
            disabled={!isEditing}
          />
          <Input 
            label="Cargo"
            value={userData.cargo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, cargo: e.target.value})}
            disabled={!isEditing}
          />
          <Input 
            label="Departamento"
            value={userData.departamento}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, departamento: e.target.value})}
            disabled={!isEditing}
          />
          <Input 
            label="Ubicación"
            value={userData.ubicacion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, ubicacion: e.target.value})}
            disabled={!isEditing}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-foreground mb-2">Biografía</label>
          <textarea
            value={userData.bio}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUserData({...userData, bio: e.target.value})}
            disabled={!isEditing}
            className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px]"
            placeholder="Cuéntanos sobre ti..."
          />
        </div>
        {isEditing && (
          <div className="mt-6 flex gap-3">
            <Button variant="primary" className="flex items-center gap-2">
              <Save size={16} />
              Guardar Cambios
            </Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancelar
            </Button>
          </div>
        )}
      </Card>
    </div>
  )

  const renderSecurity = () => (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Cambiar Contraseña</h3>
        <div className="space-y-4">
          <Input 
            label="Contraseña Actual"
            type="password"
            placeholder="••••••••"
          />
          <Input 
            label="Nueva Contraseña"
            type="password"
            placeholder="••••••••"
          />
          <Input 
            label="Confirmar Nueva Contraseña"
            type="password"
            placeholder="••••••••"
          />
          <Button variant="primary" className="w-full">
            Actualizar Contraseña
          </Button>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Autenticación de Dos Factores</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-foreground font-medium">2FA</p>
            <p className="text-sm text-muted-foreground">Añade una capa extra de seguridad a tu cuenta</p>
          </div>
          <Badge variant="warning">Desactivado</Badge>
        </div>
        <Button variant="outline" className="mt-4 w-full">
          Activar 2FA
        </Button>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Sesiones Activas</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-primary" />
              <div>
                <p className="text-foreground font-medium">Chrome - Windows</p>
                <p className="text-sm text-muted-foreground">Ciudad de México • Sesión actual</p>
              </div>
            </div>
            <Badge variant="success">Activo</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-muted-foreground" />
              <div>
                <p className="text-foreground font-medium">Firefox - Mac</p>
                <p className="text-sm text-muted-foreground">Guadalajara • Hace 2 días</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">Cerrar</Button>
          </div>
        </div>
      </Card>
    </div>
  )

  const renderPreferences = () => (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Apariencia</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tema</label>
            <select 
              value={preferences.tema}
              onChange={(e) => setPreferences({...preferences, tema: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="claro">Claro</option>
              <option value="oscuro">Oscuro</option>
              <option value="sistema">Sistema</option>
            </select>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Regional</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Idioma</label>
            <select 
              value={preferences.idioma}
              onChange={(e) => setPreferences({...preferences, idioma: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Zona Horaria</label>
            <select 
              value={preferences.zonaHoraria}
              onChange={(e) => setPreferences({...preferences, zonaHoraria: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
              <option value="America/New_York">Nueva York (GMT-5)</option>
              <option value="Europe/Madrid">Madrid (GMT+1)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Formato de Fecha</label>
            <select 
              value={preferences.formatoFecha}
              onChange={(e) => setPreferences({...preferences, formatoFecha: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
        </div>
        <Button variant="primary" className="mt-6 w-full">
          Guardar Preferencias
        </Button>
      </Card>
    </div>
  )

  const renderNotifications = () => (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-foreground mb-4">Configuración de Notificaciones</h3>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Notificaciones por Email', desc: 'Recibe notificaciones importantes en tu correo' },
            { key: 'push', label: 'Notificaciones Push', desc: 'Notificaciones en tiempo real en tu navegador' },
            { key: 'sms', label: 'Notificaciones SMS', desc: 'Alertas críticas por mensaje de texto' },
            { key: 'marketing', label: 'Marketing', desc: 'Promociones y novedades del sistema' },
            { key: 'seguridad', label: 'Seguridad', desc: 'Alertas de inicio de sesión y cambios' },
            { key: 'actualizaciones', label: 'Actualizaciones', desc: 'Nuevas características y mejoras' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="text-foreground font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={notifications[item.key as keyof typeof notifications]}
                  onChange={(e) => setNotifications({...notifications, [item.key]: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
        <Button variant="primary" className="mt-6 w-full">
          Guardar Configuración
        </Button>
      </Card>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Mi Perfil</h1>
        <p className="text-muted-foreground mt-1">Gestiona tu información y preferencias</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'personal' && renderPersonalInfo()}
      {activeTab === 'seguridad' && renderSecurity()}
      {activeTab === 'preferencias' && renderPreferences()}
      {activeTab === 'notificaciones' && renderNotifications()}
    </div>
  )
}
