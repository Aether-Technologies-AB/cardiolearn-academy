import React from 'react';
import { Star } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Carlos Flores",
      role: "Cardiólogo Intervencionista en CardioLearn",
      specialty: "Curso de Cardiología Intervencionista",
      rating: 4.9,
      students: "2,500+ estudiantes"
    },
    {
      id: 2,
      name: "Dr. Ana Ruiz",
      role: "Jefa de Ecocardiografía en CardioLearn",
      specialty: "Curso Avanzado de Ecocardiografía",
      rating: 4.8,
      students: "1,800+ estudiantes"
    },
    {
      id: 3,
      name: "Dra. Carolina Castañeda",
      role: "Especialista en Electrofisiología en CardioLearn",
      specialty: "Curso de Electrofisiología Cardíaca",
      rating: 4.9,
      students: "1,200+ estudiantes"
    },
    {
      id: 4,
      name: "Dr. Luis Martínez",
      role: "Especialista en Insuficiencia Cardíaca",
      specialty: "Curso de Manejo de Insuficiencia Cardíaca",
      rating: 4.7,
      students: "900+ estudiantes"
    }
  ];

  return (
    <section className="py-20 bg-neutral-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nuestros profesores son
            <span className="text-gradient"> expertos de la medicina cardiovascular</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-neutral-dark-grey rounded-2xl p-6 border border-neutral-medium-grey hover:border-primary-blue transition-all duration-300">
              <div className="w-16 h-16 bg-neutral-medium-grey rounded-full mb-4"></div>
              
              <h3 className="text-lg font-bold text-white mb-2">{teacher.name}</h3>
              <p className="text-neutral-light-grey text-sm mb-4">{teacher.role}</p>
              
              <div className="bg-neutral-black rounded-lg p-4 mb-4">
                <div className="text-primary-blue text-xs font-medium mb-1">ESPECIALIDAD</div>
                <div className="text-white text-sm">{teacher.specialty}</div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{teacher.rating}</span>
                </div>
                <div className="text-neutral-light-grey">{teacher.students}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
