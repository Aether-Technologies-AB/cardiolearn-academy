import React from 'react';
import { Heart, Stethoscope, Activity, Brain, Users, TrendingUp } from 'lucide-react';

const LearningPaths = () => {
  const paths = [
    {
      id: 1,
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Cardiología Intervencionista",
      modules: "24 módulos de aprendizaje",
      description: "Domina técnicas avanzadas de cateterismo cardíaco, angioplastia y procedimientos estructurales",
      color: "bg-primary-blue",
      featured: true
    },
    {
      id: 2,
      icon: <Activity className="w-8 h-8" />,
      title: "Electrofisiología Cardíaca",
      modules: "18 módulos de aprendizaje",
      description: "Especialízate en arritmias, dispositivos implantables y ablación con radiofrecuencia",
      color: "bg-primary-red",
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8" />,
      title: "Imagen Cardiovascular",
      modules: "22 módulos de aprendizaje",
      description: "Perfecciona tu interpretación de ecocardiografía, RMC y tomografía coronaria",
      color: "bg-primary-teal",
    },
    {
      id: 4,
      icon: <Brain className="w-8 h-8" />,
      title: "Cardiología Preventiva",
      modules: "16 módulos de aprendizaje",
      description: "Estrategias de prevención primaria y secundaria en medicina cardiovascular",
      color: "bg-green-600",
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: "Cardiología Pediátrica",
      modules: "20 módulos de aprendizaje",
      description: "Manejo integral de cardiopatías congénitas y adquiridas en pediatría",
      color: "bg-purple-600",
    },
    {
      id: 6,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Insuficiencia Cardíaca",
      modules: "14 módulos de aprendizaje", 
      description: "Diagnóstico, tratamiento y seguimiento de la insuficiencia cardíaca aguda y crónica",
      color: "bg-orange-600",
    }
  ];

  return (
    <section className="py-20 bg-neutral-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Especialidades cardiovasculares integrales en
            <span className="text-gradient"> 12 rutas clínicas</span>
          </h2>
          <p className="text-lg text-neutral-light-grey max-w-3xl mx-auto">
            Desarrolla expertise clínico con rutas de aprendizaje diseñadas por cardiólogos 
            reconocidos internacionalmente y actualizadas con las últimas evidencias científicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className={`group relative bg-neutral-dark-grey rounded-2xl p-8 border border-neutral-medium-grey hover:border-primary-blue transition-all duration-300 hover:transform hover:scale-105 ${
                path.featured ? 'ring-2 ring-primary-blue ring-opacity-50' : ''
              }`}
            >
              {path.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary-blue text-neutral-black px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className={`${path.color} p-4 rounded-xl w-fit mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {path.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-blue transition-colors">
                {path.title}
              </h3>
              
              <div className="text-primary-blue text-sm font-medium mb-4">
                {path.modules}
              </div>
              
              <p className="text-neutral-light-grey leading-relaxed mb-6">
                {path.description}
              </p>
              
              <button className="w-full bg-transparent border border-primary-blue text-primary-blue py-3 px-6 rounded-lg font-medium hover:bg-primary-blue hover:text-neutral-black transition-all duration-200 group-hover:bg-primary-blue group-hover:text-neutral-black">
                Explorar Ruta
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-8 py-4">
            Ver Todas las Especialidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
