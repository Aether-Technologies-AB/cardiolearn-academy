'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  organization: string;
  title: string;
  description: string;
  logo: string;
  linkText: string;
  logoColor: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  organization,
  title,
  description,
  logo,
  linkText,
  logoColor
}) => {
  return (
    <div className="bg-white rounded-xl p-8 hover:bg-gray-50 transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-200 shadow-onemedical">
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-16 h-16 ${logoColor} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
          {logo}
        </div>
        <div className="flex-1">
          <h3 className="text-gray-900 font-semibold text-lg mb-1">
            {organization}
          </h3>
          <h4 className="text-primary-blue font-semibold text-lg">
            {title}
          </h4>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <button className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue-light font-medium text-sm transition-colors duration-200 group">
        {linkText}
        <ExternalLink className="w-4 h-4 group-hover:transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
      </button>
    </div>
  );
};

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      organization: "Alianza con la Sociedad Europea de Cardiología",
      title: "",
      description: "Certificaciones oficiales reconocidas internacionalmente",
      logo: "ESC",
      logoColor: "bg-blue-700",
      linkText: "Ver los cursos"
    },
    {
      organization: "Certificación en Cardiología Intervencionista ACC/AHA",
      title: "",
      description: "Acreditación por las principales sociedades americanas",
      logo: "ACC",
      logoColor: "bg-blue-600",
      linkText: "Ver los cursos"
    },
    {
      organization: "Certificación en Ecocardiografía por la ASE",
      title: "",
      description: "Estándar mundial en imagen cardiovascular",
      logo: "ASE",
      logoColor: "bg-blue-800",
      linkText: "Ver los cursos"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-onemedical">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Obtén <span className="text-primary-blue">certificaciones</span> oficiales de:
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              {...cert}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-gray-900 text-xl font-semibold mb-4">
              🏆 Reconocimiento Internacional
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Nuestras certificaciones son reconocidas por las principales sociedades médicas 
              internacionales y cumplen con los más altos estándares de educación médica continua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
