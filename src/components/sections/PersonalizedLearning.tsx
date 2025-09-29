'use client';

import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const PersonalizedLearning = () => {
  const [learningQuery, setLearningQuery] = useState('');

  const handleGenerateRoute = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Generating route for:', learningQuery);
  };

  return (
    <section className="py-20 bg-neutral-dark-grey">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Descubre tu ruta de
              <span className="text-gradient"> aprendizaje cardiovascular personalizada</span>
            </h2>
            
            <form onSubmit={handleGenerateRoute} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="¿Qué especialidad cardiovascular quieres dominar?"
                  value={learningQuery}
                  onChange={(e) => setLearningQuery(e.target.value)}
                  className="flex-1 bg-neutral-black border border-neutral-medium-grey rounded-lg py-4 px-6 text-white placeholder-neutral-light-grey focus:outline-none focus:border-primary-blue"
                />
                <button type="submit" className="btn-primary px-8 py-4 whitespace-nowrap">
                  Generar mi ruta
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span className="text-neutral-light-grey">Domina conceptos cardiovasculares cada 5 minutos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span className="text-neutral-light-grey">Rutas clínicas te guían de residente a especialista</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span className="text-neutral-light-grey">Evalúa tu progreso con casos clínicos interactivos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-neutral-black rounded-2xl p-8 border border-neutral-medium-grey">
              <div className="bg-neutral-dark-grey rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-blue text-white px-3 py-1 rounded text-sm font-semibold">
                    ECOCARDIOGRAFÍA
                  </div>
                  <span className="text-neutral-light-grey">Curso de Preparación</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-neutral-medium-grey rounded-full"></div>
                  <div>
                    <div className="text-white font-medium">Dr. Ana Ruiz</div>
                    <div className="text-neutral-light-grey text-sm">Especialista en Imagen</div>
                  </div>
                </div>

                <div className="bg-neutral-black rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">Progreso del curso</span>
                    <span className="text-primary-blue text-sm">75%</span>
                  </div>
                  <div className="w-full bg-neutral-medium-grey rounded-full h-2">
                    <div className="bg-primary-blue h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-neutral-light-grey text-sm mb-2">
                      Curso de Preparación en Ecocardiografía
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary-blue text-neutral-black py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Continuar Aprendiendo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLearning;
