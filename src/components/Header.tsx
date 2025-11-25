'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Search, Menu, X, Heart, User, LogOut } from 'lucide-react';
import AuthModal from '@/components/auth/AuthModal';
import CardiocriticalLogo from '@/components/ui/CardiocriticalLogo';

const Header = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleLogout = async () => {
    try {
      await logout();
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-neutral-black border-b border-neutral-medium-grey sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/cardiolearn-complete" className="flex items-center gap-3">
              <CardiocriticalLogo size="md" />
              <span className="text-xl font-bold text-white">Cardiocritical Academy</span>
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
              <Link href="/aula-virtual" className="text-white hover:text-primary-red transition-colors">
                Aula Virtual
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
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-teal rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm">{user.email?.split('@')[0]}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 bg-neutral-medium-grey hover:bg-neutral-light-grey/20 rounded-lg transition-colors text-white text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => openAuthModal('login')}
                    className="text-white hover:text-primary-blue transition-colors"
                  >
                    Iniciar Sesión
                  </button>
                  <button 
                    onClick={() => openAuthModal('signup')}
                    className="btn-primary"
                  >
                    Registrarse
                  </button>
                </div>
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

            {/* Mobile Navigation Links - SYNCED WITH DESKTOP */}
            <nav className="flex flex-col gap-4 mb-8">
              <Link 
                href="/courses" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link 
                href="/aula-virtual" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Aula Virtual
              </Link>
              <Link 
                href="/dashboard" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/quiz/preview" 
                className="text-white text-lg py-3 border-b border-neutral-medium-grey hover:text-primary-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Evaluaciones
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
                  <button 
                    onClick={() => openAuthModal('login')}
                    className="btn-secondary text-center"
                  >
                    Iniciar Sesión
                  </button>
                  <button 
                    onClick={() => openAuthModal('signup')}
                    className="btn-primary text-center"
                  >
                    Registrarse Gratis
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Authentication Modal */}
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;
