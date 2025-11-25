import React from 'react';
import Header from '@/components/Header';
import SpecialtiesSection from '@/components/sections/SpecialtiesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import FacultySection from '@/components/sections/FacultySection';
import CardioLearnFooter from '@/components/sections/CardioLearnFooter';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Cardiocritical Academy header */}
      <Header />
      
      {/* Hero Section - Clean One Medical style */}
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
              Ver Especialidades
            </button>
          </div>
        </div>
      </section>

      {/* Transition section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-onemedical text-center">
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-onemedical">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Educación Cardiovascular de Clase Mundial
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cardiocritical Academy combina la excelencia académica con una experiencia digital 
              moderna, diseñada específicamente para profesionales de la salud cardiovascular.
            </p>
          </div>
        </div>
      </section>

      {/* Clean content area */}
      <section className="bg-white py-20">
        <div className="container-onemedical">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experiencia de aprendizaje superior
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología avanzada, contenido actualizado y una plataforma diseñada 
              para maximizar tu crecimiento profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-onemedical text-center">
              <div className="card-onemedical-body">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Contenido Actualizado
                </h3>
                <p className="text-gray-600">
                  Cursos desarrollados por expertos con las últimas técnicas y conocimientos en cardiología.
                </p>
              </div>
            </div>

            <div className="card-onemedical text-center">
              <div className="card-onemedical-body">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Certificaciones Oficiales
                </h3>
                <p className="text-gray-600">
                  Acreditaciones reconocidas internacionalmente que impulsan tu carrera profesional.
                </p>
              </div>
            </div>

            <div className="card-onemedical text-center">
              <div className="card-onemedical-body">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Expertos de Clase Mundial
                </h3>
                <p className="text-gray-600">
                  Aprende de cardiólogos reconocidos con décadas de experiencia clínica y académica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiocritical Academy Specialties Section */}
      <SpecialtiesSection />

      {/* Cardiocritical Academy Certifications Section */}
      <CertificationsSection />

      {/* Cardiocritical Academy Faculty Section */}
      <FacultySection />

      {/* Final CTA section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark py-20">
        <div className="container-onemedical text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para avanzar tu carrera en cardiología?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Únete a miles de profesionales que ya confían en Cardiocritical Academy 
            para su desarrollo profesional continuo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:transform hover:-translate-y-1">
              Comenzar Ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-200 hover:transform hover:-translate-y-1">
              Ver Cursos Disponibles
            </button>
          </div>
        </div>
      </section>

      {/* Cardiocritical Academy Footer */}
      <CardioLearnFooter />
    </div>
  );
}
