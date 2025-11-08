'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signIn, signUp, signInWithGoogle } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (password !== confirmPassword) {
          setError('Las contraseñas no coinciden');
          return;
        }
        if (password.length < 6) {
          setError('La contraseña debe tener al menos 6 caracteres');
          return;
        }
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      onClose();
      // Reset form
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFullName('');
    } catch (error: unknown) {
      console.error('Auth error:', error);
      const firebaseError = error as { code?: string };
      if (firebaseError.code === 'auth/user-not-found') {
        setError('Usuario no encontrado');
      } else if (firebaseError.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta');
      } else if (firebaseError.code === 'auth/email-already-in-use') {
        setError('Este email ya está registrado');
      } else if (firebaseError.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else {
        setError('Error de autenticación. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      onClose();
    } catch (error: unknown) {
      console.error('Google auth error:', error);
      setError('Error al iniciar sesión con Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-dark-grey rounded-2xl w-full max-w-md p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-neutral-medium-grey/30 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-neutral-light-grey" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-secondary-teal rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h1>
          <p className="text-neutral-light-grey">
            {mode === 'login' 
              ? 'Accede a tu cuenta de CardioLearn Academy' 
              : 'Únete a la comunidad médica más avanzada'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
              <input
                type="text"
                placeholder="Nombre completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-neutral-black border border-neutral-medium-grey rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
            <input
              type="email"
              placeholder="Email profesional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-black border border-neutral-medium-grey rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-black border border-neutral-medium-grey rounded-lg py-3 pl-10 pr-10 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey hover:text-white"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {mode === 'signup' && (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-neutral-black border border-neutral-medium-grey rounded-lg py-3 pl-10 pr-4 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue"
                required
              />
            </div>
          )}

          {error && (
            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-3">
              <p className="text-primary-red text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary-blue to-secondary-teal text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Procesando...' : (mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta')}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-neutral-medium-grey"></div>
          <span className="text-neutral-light-grey text-sm">o</span>
          <div className="flex-1 h-px bg-neutral-medium-grey"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full border border-neutral-medium-grey rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-neutral-medium-grey/20 transition-colors disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-white">Continuar con Google</span>
        </button>

        {/* Toggle Mode */}
        <div className="text-center mt-6">
          <p className="text-neutral-light-grey">
            {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-primary-blue hover:underline font-semibold"
            >
              {mode === 'login' ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
