'use client';

import React, { useState } from 'react';
import { Search, Play } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-gradient-to-b from-neutral-black to-neutral-dark-grey py-20 text-center">
      <div className="container-custom">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Educación Cardiovascular Avanzada
          <br />
          <span className="text-gradient">para Profesionales Médicos</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-light-grey mb-12 max-w-3xl mx-auto leading-relaxed">
          Domina las últimas técnicas y conocimientos en cardiología con cursos certificados, 
          casos clínicos interactivos y mentorías de expertos reconocidos mundialmente.
        </p>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-neutral-dark-grey border-2 border-primary-blue rounded-xl p-4">
              <Search className="text-neutral-light-grey w-6 h-6 mr-4" />
              <input
                type="text"
                placeholder="¿Qué especialidad cardiovascular quieres dominar?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-neutral-light-grey text-lg focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary ml-4 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Comenzar
              </button>
            </div>
          </form>
          
          <p className="text-sm text-neutral-light-grey mt-4">
            Explora cursos de: <span className="text-primary-blue">Ecocardiografía</span>, 
            <span className="text-primary-blue"> Cardiología Intervencionista</span>, 
            <span className="text-primary-blue"> Electrofisiología</span>...
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-8 py-4">
            Explorar Cursos Gratuitos
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Ver Demo de la Plataforma
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">200+</div>
            <div className="text-neutral-light-grey">Hospitales Afiliados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">15,000+</div>
            <div className="text-neutral-light-grey">Profesionales Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">500+</div>
            <div className="text-neutral-light-grey">Horas de Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">95%</div>
            <div className="text-neutral-light-grey">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
