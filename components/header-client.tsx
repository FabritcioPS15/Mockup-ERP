'use client';

import { Search, Moon, Sun, Bell, Settings, LogOut, ChevronDown, Menu, User } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useState, useEffect } from 'react';

export function HeaderClient({ onMenuClick }: { onMenuClick?: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-16 bg-card border-b border-border flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-2 flex-1">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="p-2 md:hidden text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors mr-2"
        >
          <Menu size={20} />
        </button>

        {/* Botones CTA (Movidos a la izquierda junto al menú) */}
        <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity">
          Crear Cotización
        </button>
        <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
          Reportes
        </button>
      </div>

      {/* Controles de la derecha */}
      <div className="flex items-center gap-1 sm:gap-3">
        {/* Buscador solo como ícono */}
        <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors" title="Buscar">
          <Search size={20} />
        </button>

        {/* Notificaciones */}
        <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors relative" title="Notificaciones">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>

        <div className="w-px h-6 bg-border mx-1 hidden sm:block"></div>

        {/* Perfil de Usuario */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <ChevronDown size={16} className={`transition-transform hidden sm:block ${showProfileMenu ? 'rotate-180' : ''}`} />
          </button>

          {/* Menu Desplegable */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-border">
                <p className="font-medium text-foreground">Juan Díaz</p>
                <p className="text-xs text-muted-foreground">juan@ejemplo.com</p>
              </div>
              <div className="py-2">
                <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors">
                  <User size={16} />
                  Mi Perfil
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors">
                  <Settings size={16} />
                  Configuración
                </button>
                <button 
                  onClick={toggleTheme}
                  className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors"
                >
                  {mounted && theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  Cambiar a Modo {mounted && theme === 'light' ? 'Oscuro' : 'Claro'}
                </button>
              </div>
              <div className="px-4 py-2 border-t border-border">
                <button className="w-full px-4 py-2 text-left text-sm text-destructive hover:bg-destructive/10 rounded-md flex items-center gap-3 transition-colors">
                  <LogOut size={16} />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
