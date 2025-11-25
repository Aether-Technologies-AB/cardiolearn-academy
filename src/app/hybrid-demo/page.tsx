import React from 'react';
import Header from '@/components/Header';
import { OneMedicalFormDemo } from '@/components/forms/OneMedicalForm';

const HybridDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Keep your existing CardioLearn header exactly as it is */}
      <Header />
      
      {/* Apply One Medical-inspired styling to content areas */}
      <div className="bg-gradient-subtle">
        {/* Hero Section - One Medical style with clean background */}
        <div className="container-onemedical py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Educación cardiovascular avanzada
              <span className="text-gradient block mt-2">con el mejor diseño</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Mantén tu identidad de marca en la navegación mientras disfrutas de una experiencia 
              de contenido limpia y profesional inspirada en One Medical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-onemedical-primary px-8 py-4 text-lg">
                Comenzar Aprendizaje
              </button>
              <button className="btn-onemedical-outline px-8 py-4 text-lg">
                Ver Cursos
              </button>
            </div>
          </div>
        </div>

        {/* Content Cards - One Medical clean style */}
        <div className="container-onemedical py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lo mejor de ambos mundos
            </h2>
            <p className="text-lg text-gray-600">
              Tu marca CardioLearn + diseño limpio One Medical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand Identity Card */}
            <div className="card-onemedical">
              <div className="card-onemedical-body">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-neutral-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CL</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Identidad de Marca</h3>
                    <p className="text-gray-600">Preservada completamente</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Logo y colores CardioLearn</li>
                  <li>✅ Navegación existente</li>
                  <li>✅ Funcionalidad completa</li>
                  <li>✅ Experiencia familiar</li>
                </ul>
              </div>
            </div>

            {/* One Medical Styling Card */}
            <div className="card-onemedical">
              <div className="card-onemedical-body">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">OM</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Diseño One Medical</h3>
                    <p className="text-gray-600">Para contenido limpio</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Formularios profesionales</li>
                  <li>✅ Tipografía limpia</li>
                  <li>✅ Espaciado generoso</li>
                  <li>✅ Colores suaves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="container-onemedical">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Header Intacto',
                  description: 'Tu navegación CardioLearn se mantiene exactamente igual - colores, funcionalidad, branding.',
                  icon: '🧭',
                },
                {
                  title: 'Contenido Limpio',
                  description: 'Formularios, tarjetas y contenido con el estilo profesional de One Medical.',
                  icon: '✨',
                },
                {
                  title: 'Transición Suave',
                  description: 'El cambio entre tu header oscuro y contenido claro es natural y profesional.',
                  icon: '🎯',
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Alert */}
        <div className="container-onemedical py-8">
          <div className="alert-onemedical-info">
            <h4 className="font-medium mb-2">💡 Implementación Híbrida</h4>
            <p className="text-sm">
              Esta página demuestra cómo mantener tu header CardioLearn existente mientras aplicas 
              el diseño limpio de One Medical al contenido. El contraste funciona perfectamente.
            </p>
          </div>
        </div>

        {/* Form Section with One Medical styling */}
        <div className="py-16">
          <OneMedicalFormDemo />
        </div>

        {/* Statistics Section */}
        <div className="bg-white py-16">
          <div className="container-onemedical">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Combinación perfecta
              </h3>
              <p className="text-lg text-gray-600">
                CardioLearn branding + One Medical UX = Experiencia superior
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100%', label: 'Branding Preservado' },
                { number: '200%', label: 'Mejor UX' },
                { number: '0%', label: 'Pérdida Funcional' },
                { number: '∞', label: 'Profesionalidad' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - One Medical style but referencing CardioLearn */}
        <div className="bg-gradient-to-r from-neutral-black to-neutral-dark-grey py-16">
          <div className="container-onemedical text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para la mejor experiencia CardioLearn?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Mantén todo lo que amas de CardioLearn, con una experiencia de contenido 
              más limpia y profesional.
            </p>
            <button className="btn-onemedical-primary bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg">
              Explorar Cursos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridDemoPage;
