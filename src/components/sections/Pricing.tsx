import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Básico",
      price: "€29",
      period: "/mes",
      description: "Ideal para residentes y médicos en formación",
      features: [
        "Acceso a cursos básicos de cardiología",
        "5 casos clínicos por mes",
        "Certificados de participación",
        "Soporte por email",
        "Acceso a webinars en vivo"
      ],
      buttonText: "Comenzar Gratis",
      buttonVariant: "secondary"
    },
    {
      id: 2,
      name: "Profesional",
      price: "€79",
      period: "/mes",
      description: "Para cardiólogos y especialistas activos",
      features: [
        "Acceso completo a todos los cursos",
        "Casos clínicos ilimitados",
        "Certificaciones oficiales",
        "Mentorías 1:1 con expertos",
        "Soporte prioritario 24/7",
        "Acceso a simuladores avanzados",
        "Red profesional exclusiva"
      ],
      buttonText: "Prueba 14 días gratis",
      buttonVariant: "primary",
      featured: true
    },
    {
      id: 3,
      name: "Institucional",
      price: "€299",
      period: "/mes",
      description: "Para hospitales y centros médicos",
      features: [
        "Todo lo del plan Profesional",
        "Hasta 50 usuarios incluidos",
        "Dashboard administrativo",
        "Reportes de progreso detallados",
        "Integración con LMS institucional",
        "Contenido personalizado",
        "Gestor de cuenta dedicado"
      ],
      buttonText: "Contactar Ventas",
      buttonVariant: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-neutral-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Invierte en tu
            <span className="text-gradient"> desarrollo profesional cardiovascular</span>
          </h2>
          <p className="text-lg text-neutral-light-grey max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tu carrera y objetivos profesionales. 
            Todos los planes incluyen acceso a nuestro contenido de alta calidad y soporte especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-neutral-dark-grey rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.featured 
                  ? 'border-primary-blue ring-2 ring-primary-blue ring-opacity-50' 
                  : 'border-neutral-medium-grey hover:border-primary-blue'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-blue text-neutral-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-light-grey text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-neutral-light-grey text-lg">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-light-grey text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-primary-blue text-neutral-black hover:bg-opacity-90'
                    : 'bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-neutral-black'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-neutral-light-grey mb-4">
            ¿Necesitas un plan personalizado para tu institución?
          </p>
          <button className="text-primary-blue font-medium hover:underline">
            Contacta con nuestro equipo de ventas
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">💳</div>
            <div className="text-white font-medium mb-1">Sin permanencia</div>
            <div className="text-neutral-light-grey text-sm">Cancela cuando quieras</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-white font-medium mb-1">Pago seguro</div>
            <div className="text-neutral-light-grey text-sm">SSL y encriptación</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">🎓</div>
            <div className="text-white font-medium mb-1">Certificaciones</div>
            <div className="text-neutral-light-grey text-sm">Reconocidas mundialmente</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">🆘</div>
            <div className="text-white font-medium mb-1">Soporte 24/7</div>
            <div className="text-neutral-light-grey text-sm">Ayuda especializada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
