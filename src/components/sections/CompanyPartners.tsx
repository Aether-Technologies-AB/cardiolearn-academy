import React from 'react';

const CompanyPartners = () => {
  const partners = [
    {
      id: 1,
      name: "Hospital Clínic Barcelona",
      logo: "HCB"
    },
    {
      id: 2,
      name: "Mayo Clinic",
      logo: "MAYO"
    },
    {
      id: 3,
      name: "Mount Sinai",
      logo: "MSH"
    },
    {
      id: 4,
      name: "Cleveland Clinic",
      logo: "CC"
    },
    {
      id: 5,
      name: "Johns Hopkins",
      logo: "JH"
    },
    {
      id: 6,
      name: "Hospital Universitario La Paz",
      logo: "HULP"
    }
  ];

  return (
    <section className="py-20 bg-neutral-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Más de <span className="text-gradient">200 hospitales</span> confían en CardioLearn
          </h2>
          <p className="text-lg text-neutral-light-grey max-w-3xl mx-auto">
            Las instituciones médicas más prestigiosas del mundo utilizan nuestra plataforma 
            para la formación continua de sus especialistas cardiovasculares.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="group bg-neutral-dark-grey rounded-xl p-6 border border-neutral-medium-grey hover:border-primary-blue transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-neutral-light-grey group-hover:text-primary-blue transition-colors text-center">
                <div className="text-2xl font-bold mb-2">{partner.logo}</div>
                <div className="text-xs">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">200+</div>
              <div className="text-neutral-light-grey">Hospitales Afiliados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">50</div>
              <div className="text-neutral-light-grey">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">15,000+</div>
              <div className="text-neutral-light-grey">Profesionales Certificados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPartners;
