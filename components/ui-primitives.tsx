'use client'

import { ReactNode } from 'react'

// Componente Tarjeta - Contenedor con estilo de tarjeta
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-xl border border-border/60 p-6 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}

// Componente Insignia - Badge para mostrar estados
export function Badge({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'success' | 'warning' | 'danger' }) {
  const variantes = {
    default: 'bg-muted text-foreground',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    danger: 'bg-red-100 text-red-800',
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variantes[variant]}`}>
      {children}
    </span>
  )
}

// Componente Botón - Botón reutilizable con variantes
export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: { 
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  [key: string]: any
}) {
  const variantes = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    outline: 'border border-border text-foreground hover:bg-muted',
    ghost: 'text-foreground hover:bg-muted',
  }
  
  const tamanos = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button 
      className={`rounded-lg font-medium transition-colors ${variantes[variant]} ${tamanos[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Componente Estadística - Muestra una estadística con icono opcional
export function Stat({ 
  label, 
  value, 
  change,
  icon: Icon
}: { 
  label: string
  value: string | number
  change?: string
  icon?: any
}) {
  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
        {change && (
          <p className={`text-xs mt-2 ${change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </p>
        )}
      </div>
      {Icon && (
        <div className="p-3 bg-accent/10 rounded-lg">
          <Icon size={24} className="text-accent" />
        </div>
      )}
    </Card>
  )
}

// Componente Tabla - Tabla de datos con encabezados
export function Table({ 
  headers, 
  rows 
}: { 
  headers: string[]
  rows: ReactNode[][]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/50">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="px-6 py-3 text-left font-semibold text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-6 py-4 text-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

// Componente Modal - Ventana modal reutilizable
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  actions?: ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
        <div className="mb-6">{children}</div>
        {actions && <div className="flex gap-3 justify-end">{actions}</div>}
      </Card>
    </div>
  )
}

// Componente Entrada - Campo de entrada reutilizable
export function Input({
  label,
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}: {
  label?: string
  type?: string
  placeholder?: string
  className?: string
  [key: string]: any
}) {
  return (
    <div className={className}>
      {label && <label className="block text-sm font-medium text-foreground mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        {...props}
      />
    </div>
  )
}
