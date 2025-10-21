'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home,
  Calendar,
  Book,
  Play,
  FileText,
  Target,
  Folder,
  MessageSquare,
  Mail,
  ChevronDown,
  ChevronRight,
  User,
  Clock,
  Search,
  Maximize2,
  Menu,
  X
} from 'lucide-react';

interface VirtualClassroomProps {
  courseTitle?: string;
  courseCode?: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
  submenu?: { id: string; label: string; active?: boolean }[];
  active?: boolean;
}

const VirtualClassroom: React.FC<VirtualClassroomProps> = ({
  courseTitle = "Fundamentos de la ecocardiografía en emergencias críticas",
  courseCode = "EXP_CRITICOS_OCT25"
}) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [expandedSections, setExpandedSections] = useState<string[]>(['temario']);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navItems: NavItem[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: <Home className="w-5 h-5" />,
      active: activeSection === 'inicio'
    },
    {
      id: 'calendario',
      label: 'Calendario',
      icon: <Calendar className="w-5 h-5" />,
      active: activeSection === 'calendario'
    },
    {
      id: 'temario',
      label: 'Temario',
      icon: <Book className="w-5 h-5" />,
      hasSubmenu: true,
      submenu: [
        { id: 'modulo1', label: 'Módulo 1. Fundamentos de la ecocardiografía en emergencias críticas', active: true },
        { id: 'modulo2', label: 'Módulo 2. Técnicas avanzadas de imagen' },
        { id: 'modulo3', label: 'Módulo 3. Casos clínicos interactivos' }
      ],
      active: activeSection === 'temario'
    },
    {
      id: 'multimedia',
      label: 'Multimedia',
      icon: <Play className="w-5 h-5" />,
      active: activeSection === 'multimedia'
    },
    {
      id: 'evaluaciones',
      label: 'Evaluaciones',
      icon: <FileText className="w-5 h-5" />,
      active: activeSection === 'evaluaciones'
    },
    {
      id: 'actividades',
      label: 'Actividades',
      icon: <Target className="w-5 h-5" />,
      active: activeSection === 'actividades'
    },
    {
      id: 'documentos',
      label: 'Documentos',
      icon: <Folder className="w-5 h-5" />,
      hasSubmenu: true,
      submenu: [
        { id: 'guia', label: 'Guía de Estudios' },
        { id: 'programa', label: 'Programa del curso' }
      ],
      active: activeSection === 'documentos'
    },
    {
      id: 'foro',
      label: 'Foro',
      icon: <MessageSquare className="w-5 h-5" />,
      active: activeSection === 'foro'
    },
    {
      id: 'contacto',
      label: 'Contacto',
      icon: <Mail className="w-5 h-5" />,
      active: activeSection === 'contacto'
    }
  ];

  const renderMainContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-blue to-secondary-teal p-6 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-2">Bienvenido al Aula Virtual</h2>
              <p className="text-lg opacity-90">{courseTitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-dark-grey p-6 rounded-lg border border-neutral-medium-grey">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-blue/20 rounded-full">
                    <Clock className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Progreso del Curso</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-light-grey">Completado</span>
                    <span className="text-primary-blue">35%</span>
                  </div>
                  <div className="w-full bg-neutral-medium-grey rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-blue to-primary-red h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-dark-grey p-6 rounded-lg border border-neutral-medium-grey">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-red/20 rounded-full">
                    <Target className="w-6 h-6 text-primary-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Próxima Evaluación</h3>
                </div>
                <p className="text-neutral-light-grey text-sm">Quiz Módulo 1</p>
                <p className="text-secondary-gold font-semibold">Vence en 3 días</p>
              </div>

              <div className="bg-neutral-dark-grey p-6 rounded-lg border border-neutral-medium-grey">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary-gold/20 rounded-full">
                    <MessageSquare className="w-6 h-6 text-secondary-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Foro Activo</h3>
                </div>
                <p className="text-neutral-light-grey text-sm">12 nuevas discusiones</p>
                <p className="text-secondary-gold font-semibold">Participar ahora</p>
              </div>
            </div>
          </div>
        );
      
      case 'temario':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Temario del Curso</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(moduleNum => (
                <div key={moduleNum} className="bg-neutral-dark-grey rounded-lg border border-neutral-medium-grey overflow-hidden">
                  <div className="p-4 border-b border-neutral-medium-grey">
                    <h3 className="text-lg font-semibold text-white">
                      Módulo {moduleNum}. {moduleNum === 1 ? 'Fundamentos de la ecocardiografía en emergencias críticas' : 
                                           moduleNum === 2 ? 'Técnicas avanzadas de imagen' : 
                                           'Casos clínicos interactivos'}
                    </h3>
                  </div>
                  <div className="p-4 space-y-2">
                    {[1, 2, 3, 4].map(lesson => (
                      <div key={lesson} className="flex items-center gap-3 p-2 hover:bg-neutral-medium-grey/30 rounded cursor-pointer">
                        <Play className="w-4 h-4 text-primary-blue" />
                        <span className="text-neutral-light-grey">Lección {lesson}: Conceptos básicos</span>
                        <span className="ml-auto text-xs text-neutral-medium-grey">15 min</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-2">{navItems.find(item => item.id === activeSection)?.label}</h2>
              <p className="text-neutral-light-grey">Contenido en construcción</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-black">
      {/* Header */}
      <div className="bg-neutral-dark-grey border-b border-neutral-medium-grey px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle Button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-neutral-medium-grey/30 rounded-lg transition-colors"
            >
              {sidebarCollapsed ? <Menu className="w-5 h-5 text-neutral-light-grey" /> : <X className="w-5 h-5 text-neutral-light-grey" />}
            </button>
            
            {/* CardioLearn Logo - Clickable to go back home */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-teal rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div>
                <span className="text-primary-blue font-bold text-lg">CardioLearn</span>
                <span className="text-neutral-light-grey text-sm ml-2">Academy</span>
              </div>
            </Link>
            
            <div className="h-6 w-px bg-neutral-medium-grey mx-2"></div>
            
            <div>
              <h1 className="text-white font-semibold">Campus - {courseCode}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-neutral-black/50 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-neutral-light-grey" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-transparent text-white text-sm focus:outline-none w-32"
              />
            </div>
            <button className="p-2 hover:bg-neutral-medium-grey/30 rounded-lg">
              <Maximize2 className="w-5 h-5 text-neutral-light-grey" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className={`${sidebarCollapsed ? 'w-0' : 'w-80'} bg-neutral-dark-grey border-r border-neutral-medium-grey min-h-[calc(100vh-73px)] overflow-y-auto transition-all duration-300 ${sidebarCollapsed ? 'border-r-0' : ''}`}>
          {!sidebarCollapsed && (
            <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    if (item.hasSubmenu) {
                      toggleSection(item.id);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active 
                      ? 'bg-primary-blue/20 text-primary-blue border-l-4 border-primary-blue' 
                      : 'text-neutral-light-grey hover:bg-neutral-medium-grey/30 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="flex-1">{item.label}</span>
                  {item.hasSubmenu && (
                    expandedSections.includes(item.id) ? 
                      <ChevronDown className="w-4 h-4" /> : 
                      <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {/* Submenu */}
                {item.hasSubmenu && expandedSections.includes(item.id) && item.submenu && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveSection(subItem.id)}
                        className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${
                          subItem.active 
                            ? 'text-secondary-gold bg-secondary-gold/10' 
                            : 'text-neutral-light-grey hover:text-white hover:bg-neutral-medium-grey/20'
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </nav>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default VirtualClassroom;
