'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  FileText, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Plus,
  CheckCircle2,
  Clock,
  XCircle,
  FileEdit,
  Download,
  Eye,
  ChevronDown,
  Mail,
  Printer,
  Copy
} from 'lucide-react'

// Datos de ejemplo
const quotations = [
  {
    id: 'COT-2026-089',
    client: 'Constructora Alfa S.A.C.',
    date: '01/07/2026',
    amount: '$ 45,000.00',
    status: 'Aprobada',
    salesperson: 'Juan Díaz',
  },
  {
    id: 'COT-2026-090',
    client: 'Minera Los Andes',
    date: '30/06/2026',
    amount: '$ 112,500.00',
    status: 'En Revisión',
    salesperson: 'María Torres',
  },
  {
    id: 'COT-2026-091',
    client: 'Transportes Rápidos SRL',
    date: '28/06/2026',
    amount: '$ 18,200.00',
    status: 'Pendiente',
    salesperson: 'Juan Díaz',
  },
  {
    id: 'COT-2026-092',
    client: 'Inmobiliaria El Bosque',
    date: '25/06/2026',
    amount: '$ 5,400.00',
    status: 'Rechazada',
    salesperson: 'Luis Silva',
  },
  {
    id: 'COT-2026-093',
    client: 'Consultora Integral EIRL',
    date: '22/06/2026',
    amount: '$ 21,000.00',
    status: 'Aprobada',
    salesperson: 'María Torres',
  },
  {
    id: 'COT-2026-094',
    client: 'Tech Solutions SAC',
    date: '20/06/2026',
    amount: '$ 32,800.00',
    status: 'Borrador',
    salesperson: 'Ana Gómez',
  },
]

export default function QuotationsPage() {
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar el dropdown al hacer click afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsQuickActionsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Cotizaciones</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona y haz seguimiento a todas las cotizaciones emitidas a los clientes.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Quick Actions Dropdown */}
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button 
              onClick={() => setIsQuickActionsOpen(!isQuickActionsOpen)}
              className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
            >
              Acciones Rápidas
              <ChevronDown size={16} className={`transition-transform duration-200 ${isQuickActionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isQuickActionsOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors text-left">
                    <Mail size={16} className="text-muted-foreground" />
                    Enviar Recordatorios
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors text-left">
                    <Download size={16} className="text-muted-foreground" />
                    Exportar a Excel
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors text-left">
                    <Printer size={16} className="text-muted-foreground" />
                    Imprimir Seleccionadas
                  </button>
                </div>
                <div className="h-px bg-border w-full" />
                <div className="p-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-500/10 rounded-md transition-colors text-left">
                    <XCircle size={16} />
                    Eliminar Seleccionadas
                  </button>
                </div>
              </div>
            )}
          </div>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            <Plus size={18} />
            Nueva Cotización
          </button>
        </div>
      </div>

      {/* Tarjetas de Resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Cotizaciones Activas</p>
              <h3 className="text-2xl font-bold mt-2">142</h3>
            </div>
            <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
              <FileText size={20} />
            </div>
          </div>
          <p className="text-xs text-green-500 font-medium mt-2">+12% este mes</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tasa de Aprobación</p>
              <h3 className="text-2xl font-bold mt-2">68%</h3>
            </div>
            <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <p className="text-xs text-green-500 font-medium mt-2">+4% este mes</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">En Revisión</p>
              <h3 className="text-2xl font-bold mt-2">28</h3>
            </div>
            <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              <Clock size={20} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Pendientes de respuesta</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Rechazadas</p>
              <h3 className="text-2xl font-bold mt-2">14</h3>
            </div>
            <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
              <XCircle size={20} />
            </div>
          </div>
          <p className="text-xs text-red-500 font-medium mt-2">+2% este mes</p>
        </div>
      </div>

      {/* Controles de la Tabla */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por ID, Cliente o Vendedor..." 
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium">
          <Filter size={18} />
          Filtros
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium text-muted-foreground">ID Cotización</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Cliente</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Fecha</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Monto</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Vendedor</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Estado</th>
                <th className="px-6 py-4 font-medium text-muted-foreground text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {quotations.map((quote) => (
                <tr key={quote.id} className="hover:bg-muted/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{quote.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{quote.client}</td>
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{quote.date}</td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">{quote.amount}</td>
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{quote.salesperson}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${quote.status === 'Aprobada' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' : 
                        quote.status === 'En Revisión' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' : 
                        quote.status === 'Pendiente' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' : 
                        quote.status === 'Rechazada' ? 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' : 
                        'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20'}`}
                    >
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors" title="Ver detalle">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors" title="Editar">
                        <FileEdit size={16} />
                      </button>
                      <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors" title="Descargar PDF">
                        <Download size={16} />
                      </button>
                      <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground bg-muted/20">
          <div>Mostrando 6 de 142 resultados</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-border rounded-md hover:bg-muted transition-colors disabled:opacity-50" disabled>Anterior</button>
            <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">1</button>
            <button className="px-3 py-1 border border-border rounded-md hover:bg-muted transition-colors">2</button>
            <button className="px-3 py-1 border border-border rounded-md hover:bg-muted transition-colors">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-border rounded-md hover:bg-muted transition-colors">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  )
}
