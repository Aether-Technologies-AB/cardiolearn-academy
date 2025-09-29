import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      organization: "Sociedad Europea de Cardiología",
      title: "Alianza con la Sociedad Europea de Cardiología",
      description: "Certificaciones oficiales reconocidas internacionalmente",
      logo: "ESC",
    },
    {
      id: 2,
      organization: "ACC/AHA",
      title: "Certificación en Cardiología Intervencionista ACC/AHA",
      description: "Acreditación por las principales sociedades americanas",
      logo: "ACC",
    },
    {
      id: 3,
      organization: "ASE",
      title: "Certificación en Ecocardiografía por la ASE",
      description: "Estándar mundial en imagen cardiovascular",
      logo: "ASE",
    }
  ];

  return (
    <section className="py-20 bg-neutral-dark-grey">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Obtén <span className="text-gradient">certificaciones</span> oficiales de:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-neutral-black rounded-2xl p-8 border border-neutral-medium-grey hover:border-primary-blue transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-primary-blue text-neutral-black w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                  {cert.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-neutral-light-grey text-sm">{cert.description}</p>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-primary-blue text-primary-blue py-3 px-6 rounded-lg font-medium hover:bg-primary-blue hover:text-neutral-black transition-all duration-200">
                Ver los cursos
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
