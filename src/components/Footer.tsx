import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark-grey border-t border-neutral-medium-grey">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Heart className="w-6 h-6 text-primary-blue" fill="currentColor" />
                <div className="absolute inset-0 w-6 h-6">
                  <div className="w-2.5 h-2.5 bg-primary-red rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <span className="text-lg font-bold text-white">CardioLearn</span>
            </Link>
            <p className="text-neutral-light-grey text-sm leading-relaxed">
              El futuro de la educación cardiovascular
            </p>
          </div>

          {/* Aprendizaje */}
          <div>
            <h4 className="text-white font-semibold mb-4">Aprendizaje</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/cursos" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Todos los Cursos
                </Link>
              </li>
              <li>
                <Link href="/rutas" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Rutas de Aprendizaje
                </Link>
              </li>
              <li>
                <Link href="/certificaciones" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="/clases-vivo" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Clases en Vivo
                </Link>
              </li>
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="text-white font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/foro" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Foro de Estudiantes
                </Link>
              </li>
              <li>
                <Link href="/grupos-estudio" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Grupos de Estudio
                </Link>
              </li>
              <li>
                <Link href="/mentoria" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Mentoría
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresarial */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresarial</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/hospitales" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Para Hospitales
                </Link>
              </li>
              <li>
                <Link href="/planes-empresariales" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Planes Empresariales
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Acceso API
                </Link>
              </li>
              <li>
                <Link href="/alianzas" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Alianzas
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ayuda" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-medium-grey">
          <p className="text-neutral-light-grey text-sm mb-4 md:mb-0">
            © 2024 CardioLearn Academy. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
              Twitter
            </Link>
            <Link href="#" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
              LinkedIn
            </Link>
            <Link href="#" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
              Facebook
            </Link>
            <Link href="#" className="text-neutral-light-grey hover:text-primary-blue transition-colors text-sm">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
