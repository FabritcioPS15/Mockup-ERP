'use client'

import { ReactNode } from 'react'
import { Plus } from 'lucide-react'
import { Button } from './ui-primitives'

// Interfaz para las propiedades del encabezado de página
interface PageHeaderProps {
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
  showButton?: boolean
}

// Componente reutilizable para el encabezado de página
export function PageHeader({ title, description, buttonText, onButtonClick, showButton = true }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
      {showButton && (
        <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2" onClick={onButtonClick}>
          <Plus size={18} />
          {buttonText || 'Agregar Nuevo'}
        </Button>
      )}
    </div>
  )
}

// Interfaz para las propiedades del filtro de búsqueda
interface SearchFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  placeholder?: string
  filterButtons?: ReactNode
}

// Componente reutilizable para búsqueda y filtros
export function SearchFilter({ searchTerm, onSearchChange, placeholder = 'Buscar...', filterButtons }: SearchFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      {filterButtons && (
        <div className="flex gap-2 w-full sm:w-auto">
          {filterButtons}
        </div>
      )}
    </div>
  )
}

// Interfaz para las propiedades de la cuadrícula de estadísticas
interface StatsGridProps {
  stats: Array<{
    label: string
    value: string | number
  }>
}

// Componente reutilizable para mostrar estadísticas en cuadrícula
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card rounded-xl border border-border/60 p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

// Interfaz para las propiedades de la tabla de datos
interface DataTableProps {
  headers: string[]
  rows: ReactNode[][]
}

// Componente reutilizable para tabla de datos
export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
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
    </div>
  )
}
