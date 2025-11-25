'use client';

import React from 'react';
import { Star, Users } from 'lucide-react';

interface FacultyMemberProps {
  name: string;
  title: string;
  specialty: string;
  courseTitle: string;
  rating: number;
  studentCount: string;
  avatar?: string;
}

const FacultyMember: React.FC<FacultyMemberProps> = ({
  name,
  title,
  specialty,
  courseTitle,
  rating,
  studentCount,
  avatar
}) => {
  return (
    <div className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-200 shadow-onemedical">
      {/* Avatar */}
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-6 mx-auto flex items-center justify-center">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        )}
      </div>

      {/* Name and Title */}
      <div className="text-center mb-4">
        <h3 className="text-gray-900 font-semibold text-lg mb-1">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">
          {title}
        </p>
      </div>

      {/* Course Badge */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
        <div className="text-primary-blue text-xs font-medium mb-1 uppercase tracking-wide">
          {specialty}
        </div>
        <div className="text-gray-900 text-sm font-medium">
          {courseTitle}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-gray-900 font-medium">{rating}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{studentCount}</span>
        </div>
      </div>
    </div>
  );
};

const FacultySection: React.FC = () => {
  const facultyMembers = [
    {
      name: "Dr. Carlos Flores",
      title: "Cardiólogo Intervencionista en CardioLearn",
      specialty: "ESPECIALIDAD",
      courseTitle: "Curso de Cardiología Intervencionista",
      rating: 4.9,
      studentCount: "2,500+ estudiantes"
    },
    {
      name: "Dr. Ana Ruiz",
      title: "Jefa de Ecocardiografía en CardioLearn",
      specialty: "ESPECIALIDAD",
      courseTitle: "Curso Avanzado de Ecocardiografía",
      rating: 4.8,
      studentCount: "1,800+ estudiantes"
    },
    {
      name: "Dra. Carolina Castañeda",
      title: "Especialista en Electrofisiología en CardioLearn",
      specialty: "ESPECIALIDAD",
      courseTitle: "Curso de Electrofisiología Cardíaca",
      rating: 4.9,
      studentCount: "1,200+ estudiantes"
    },
    {
      name: "Dr. Luis Martínez",
      title: "Especialista en Insuficiencia Cardíaca",
      specialty: "ESPECIALIDAD",
      courseTitle: "Curso de Manejo de Insuficiencia Cardíaca",
      rating: 4.7,
      studentCount: "900+ estudiantes"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-onemedical">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros profesores son{' '}
            <span className="text-primary-blue">expertos de la medicina</span>
            <br />
            <span className="text-primary-blue">cardiovascular</span>
          </h2>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <FacultyMember
              key={index}
              {...member}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-onemedical max-w-4xl mx-auto">
            <h3 className="text-gray-900 text-xl font-semibold mb-4">
              👨‍⚕️ Facultad de Clase Mundial
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestros instructores son cardiólogos certificados con décadas de experiencia clínica, 
              investigación publicada y reconocimiento internacional en sus respectivas especialidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
