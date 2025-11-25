'use client';

import React from 'react';
import { Stethoscope, Heart, Activity, Shield, Baby, TrendingUp } from 'lucide-react';

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  buttonText: string;
  level: string;
  iconBg: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon,
  title,
  description,
  badge,
  buttonText,
  level,
  iconBg
}) => {
  return (
    <div className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-200 shadow-onemedical">
      {badge && (
        <div className="inline-block bg-primary-blue text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">
          {badge}
        </div>
      )}
      
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="text-primary-blue text-sm font-medium mb-4">
        {level}
      </div>
      
      <button className="w-full bg-primary-blue hover:bg-primary-blue-dark text-white py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:-translate-y-0.5 shadow-onemedical">
        {buttonText}
      </button>
    </div>
  );
};

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-600",
      title: "Cardiología Intervencionista",
      description: "Domina técnicas avanzadas de cateterismo cardíaco, angioplastia y procedimientos estructurales",
      level: "NIVEL AVANZADO",
      buttonText: "Explorar Ruta",
      badge: "Más Popular"
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      iconBg: "bg-red-600",
      title: "Electrofisiología Cardíaca",
      description: "Especialízate en arritmias, dispositivos implantables y ablación con radiofrecuencia",
      level: "NIVEL EXPERTO",
      buttonText: "Explorar Ruta"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      iconBg: "bg-gray-600",
      title: "Imagen Cardiovascular",
      description: "Perfecciona tu interpretación de ecocardiografía, RMC y tomografía coronaria",
      level: "NIVEL INTERMEDIO",
      buttonText: "Explorar Ruta"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      iconBg: "bg-teal-600",
      title: "Cardiología Preventiva",
      description: "Estrategias de prevención primaria y secundaria en medicina cardiovascular",
      level: "NIVEL FUNDAMENTAL",
      buttonText: "Explorar Ruta"
    },
    {
      icon: <Baby className="w-6 h-6 text-white" />,
      iconBg: "bg-red-600",
      title: "Cardiología Pediátrica",
      description: "Manejo integral de cardiopatías congénitas y adquiridas en pediatría",
      level: "NIVEL ESPECIALIZADO",
      buttonText: "Explorar Ruta"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      iconBg: "bg-orange-600",
      title: "Insuficiencia Cardíaca",
      description: "Diagnóstico, tratamiento y seguimiento de la insuficiencia cardíaca aguda y crónica",
      level: "NIVEL AVANZADO",
      buttonText: "Explorar Ruta"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-onemedical">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Especialidades en{' '}
            <span className="text-primary-blue">Cardiología</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Desarrolla expertise clínico con rutas de aprendizaje diseñadas por cardiólogos 
            reconocidos internacionalmente y actualizadas con las últimas evidencias científicas.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              {...specialty}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary-blue hover:bg-primary-blue-dark text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:transform hover:-translate-y-1 shadow-onemedical-lg">
            Ver Todas las Especialidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
