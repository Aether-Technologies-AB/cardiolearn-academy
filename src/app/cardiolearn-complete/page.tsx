import React from 'react';
import Header from '@/components/Header';
import SpecialtiesSection from '@/components/sections/SpecialtiesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import FacultySection from '@/components/sections/FacultySection';
import CardioLearnFooter from '@/components/sections/CardioLearnFooter';


const CardioLearnCompletePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Your existing CardioLearn header - preserved exactly */}
      <Header />
      
      {/* Hero Section - Clean One Medical style introduction */}
      <section className="bg-gradient-subtle py-20">
        <div className="container-onemedical text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            La mejor experiencia en educación
            <span className="text-gradient block mt-2">cardiovascular</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Combina la nueva identidad de Cardiocritical Academy con una experiencia de usuario 
            moderna, limpia y profesional inspirada en los mejores estándares de diseño médico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-onemedical-primary px-8 py-4 text-lg">
              Comenzar Ahora
            </button>
            <button className="btn-onemedical-outline px-8 py-4 text-lg">
              Ver Demo Completo
            </button>
          </div>
        </div>
      </section>

      {/* Your preserved CardioLearn Specialties Section */}
      <SpecialtiesSection />

      {/* Transition section - bridging dark to light */}
      <section className="bg-gradient-to-b from-neutral-black to-gray-50 py-16">
        <div className="container-onemedical text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎯 Lo mejor de ambos mundos
            </h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Mantén la identidad visual de CardioLearn que tus usuarios aman, mientras proporcionas 
              áreas de contenido y formularios con el diseño limpio y profesional de One Medical.
            </p>
          </div>
        </div>
      </section>

      {/* Clean content area - One Medical inspired */}
      <section className="bg-white py-20">
        <div className="container-onemedical">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experiencia de contenido superior
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formularios más limpios, mejor legibilidad y una experiencia más profesional 
              en las áreas de contenido e interacción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-onemedical text-center">
              <div className="card-onemedical-body">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Contenido Claro
                </h3>
                <p className="text-gray-600">
                  Tipografía optimizada y espaciado generoso para mejor comprensión del contenido médico.
                </p>
              </div>
            </div>

            <div className="card-onemedical text-center">
              <div className="card-onemedical-body">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Formularios Intuitivos
                </h3>
                <p className="text-gray-600">
                  Campos de entrada más claros con mejor validación y experiencia de usuario.
                </p>
              </div>
            </div>

            <div className="card-onemedical text-center">
              <div className="card-onemedical-body">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Diseño Profesional
                </h3>
                <p className="text-gray-600">
                  Estética médica moderna que inspire confianza y profesionalidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your preserved CardioLearn Certifications Section */}
      <CertificationsSection />





      {/* Your preserved CardioLearn Faculty Section */}
      <FacultySection />

      {/* Final CTA section - bridging to footer */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark py-20">
        <div className="container-onemedical text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para implementar esta experiencia?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Puedes aplicar estos mismos principios de diseño a todas tus páginas de CardioLearn, 
            manteniendo tu identidad de marca mientras mejoras significativamente la experiencia del usuario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:transform hover:-translate-y-1">
              Comenzar Implementación
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-200 hover:transform hover:-translate-y-1">
              Ver Documentación
            </button>
          </div>
        </div>
      </section>

      {/* Your preserved CardioLearn Footer */}
      <CardioLearnFooter />
    </div>
  );
};

export default CardioLearnCompletePage;
