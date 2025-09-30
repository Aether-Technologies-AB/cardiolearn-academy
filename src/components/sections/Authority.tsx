import React from 'react';
import { CheckCircle, Users, BookOpen, Award } from 'lucide-react';

const Authority = () => {
  const achievements = [
    {
      icon: <Users className="w-12 h-12" />,
      number: "15,000+",
      title: "Profesionales Certificados",
      description: "Médicos y especialistas activos en nuestra plataforma"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      number: "500+",
      title: "Horas de Contenido",
      description: "Videos, casos clínicos y material educativo especializado"
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: "200+",
      title: "Hospitales Afiliados",
      description: "Instituciones médicas que confían en nuestra formación"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      number: "95%",
      title: "Satisfacción",
      description: "Nivel de satisfacción de nuestros usuarios especialistas"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "CardioLearn ha transformado la forma en que mi equipo se mantiene actualizado en las últimas técnicas de cateterismo.",
      author: "Dr. Miguel Ángel Fernández",
      role: "Jefe de Cardiología Intervencionista",
      hospital: "Hospital Universitario Ramón y Cajal"
    },
    {
      id: 2,
      quote: "La calidad del contenido y la accesibilidad de la plataforma son excepcionales para la formación continua.",
      author: "Dra. Carmen López",
      role: "Especialista en Ecocardiografía",
      hospital: "Hospital Clínic Barcelona"
    }
  ];

  return (
    <section className="py-20 bg-neutral-dark-grey">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            CardioLearn es la plataforma
            <span className="text-gradient"> líder en educación cardiovascular</span>
          </h2>
          <p className="text-lg text-neutral-light-grey max-w-3xl mx-auto">
            Reconocida por las principales instituciones médicas y sociedades científicas 
            por nuestro compromiso con la excelencia educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-neutral-black p-6 rounded-2xl border border-neutral-medium-grey group-hover:border-primary-blue transition-all duration-300 mb-4">
                <div className="text-primary-blue mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-white mb-3">
                  {achievement.title}
                </div>
                <p className="text-neutral-light-grey text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-black rounded-2xl p-8 border border-neutral-medium-grey">
              <div className="mb-6">
                <p className="text-lg text-white leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-medium-grey rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-primary-blue text-sm">{testimonial.role}</div>
                  <div className="text-neutral-light-grey text-sm">{testimonial.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
