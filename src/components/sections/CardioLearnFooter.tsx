'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import CardiocriticalLogo from '@/components/ui/CardiocriticalLogo';

const CardioLearnFooter: React.FC = () => {
  const footerLinks = {
    aprendizaje: [
      { label: 'Todos los Cursos', href: '/courses' },
      { label: 'Rutas de Aprendizaje', href: '/learning-paths' },
      { label: 'Certificaciones', href: '/certifications' },
      { label: 'Clases en Vivo', href: '/live-classes' }
    ],
    comunidad: [
      { label: 'Foro de Estudiantes', href: '/forum' },
      { label: 'Grupos de Estudio', href: '/study-groups' },
      { label: 'Mentoría', href: '/mentorship' },
      { label: 'Eventos', href: '/events' }
    ],
    empresarial: [
      { label: 'Para Hospitales', href: '/hospitals' },
      { label: 'Planes Empresariales', href: '/enterprise' },
      { label: 'Acceso API', href: '/api' },
      { label: 'Alianzas', href: '/partnerships' }
    ],
    soporte: [
      { label: 'Centro de Ayuda', href: '/help' },
      { label: 'Contáctanos', href: '/contact' },
      { label: 'Política de Privacidad', href: '/privacy' },
      { label: 'Términos de Servicio', href: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-onemedical py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/cardiolearn-complete" className="flex items-center gap-3 mb-4">
              <CardiocriticalLogo size="md" />
              <span className="text-xl font-bold text-gray-900">Cardiocritical Academy</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              El futuro de la educación cardiovascular
            </p>
          </div>

          {/* Aprendizaje */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Aprendizaje</h3>
            <ul className="space-y-3">
              {footerLinks.aprendizaje.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Comunidad</h3>
            <ul className="space-y-3">
              {footerLinks.comunidad.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresarial */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Empresarial</h3>
            <ul className="space-y-3">
              {footerLinks.empresarial.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2024 Cardiocritical Academy. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-200 hover:bg-primary-blue rounded-lg flex items-center justify-center transition-all duration-200 hover:transform hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-600 hover:text-white" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CardioLearnFooter;
