'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// import { useAuth } from '@/contexts/AuthContext'; // Temporarily disabled
import { Search, Menu, X, User, LogIn, Heart } from 'lucide-react';

const Header = () => {
  // const { user, logout } = useAuth(); // Temporarily disabled
  const user = null; // Mock user state for development
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = async () => {
    try {
      // await logout(); // Temporarily disabled
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <header className="bg-neutral-black border-b border-neutral-medium-grey sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary-blue" fill="currentColor" />
                <div className="absolute inset-0 w-8 h-8">
                  <div className="w-3 h-3 bg-primary-red rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-white">CardioLearn</span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar cursos cardiovasculares..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-dark-grey border border-neutral-medium-grey rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-30"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/courses" className="text-white hover:text-primary-blue transition-colors">
                Cursos
              </Link>
              <Link href="/dashboard" className="text-white hover:text-primary-blue transition-colors">
                Dashboard
              </Link>
              <Link href="/quiz/preview" className="text-white hover:text-primary-blue transition-colors">
                Evaluaciones
              </Link>
              <Link href="/residentes" className="text-white hover:text-primary-blue transition-colors">
                Residentes
              </Link>
              <Link href="/investigacion" className="text-white hover:text-primary-blue transition-colors">
                Investigación
              </Link>
              <Link href="/precios" className="text-white hover:text-primary-blue transition-colors">
                Precios
              </Link>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <Link href="/dashboard" className="text-white hover:text-primary-blue transition-colors">
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="btn-secondary text-sm"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <Link href="/login" className="btn-primary">
                  Acceder
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 w-full h-full bg-neutral-black p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative">
                  <Heart className="w-8 h-8 text-primary-blue" fill="currentColor" />
                  <div className="absolute inset-0 w-8 h-8">
                    <div className="w-3 h-3 bg-primary-red rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-white">CardioLearn</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar cursos cardiovasculares..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-dark-grey border border-neutral-medium-grey rounded-lg py-4 pl-10 pr-4 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4 mb-8">
              <Link 
                href="/cursos" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link 
                href="/residentes" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Residentes
              </Link>
              <Link 
                href="/investigacion" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investigación
              </Link>
              <Link 
                href="/cme-vivo" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CME en Vivo
              </Link>
              <Link 
                href="/conferencias" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conferencias
              </Link>
              <Link 
                href="/precios" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </Link>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-4">
              {user ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="btn-primary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mi Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="btn-secondary"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="btn-primary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Acceder
                  </Link>
                  <Link 
                    href="/registro" 
                    className="btn-secondary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Registrarse Gratis
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
