'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, Star, Users, Play, Book, Award, ChevronDown } from 'lucide-react';
import { Course, CardiologySpecialty, CourseLevel } from '@/types/course';

interface CourseCatalogProps {
  courses: Course[];
  onEnroll?: (courseId: string) => void;
}

export default function CourseCatalog({ courses, onEnroll }: CourseCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<CardiologySpecialty | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | 'all'>('all');
  const [sortBy, setSortBy] = useState<'title' | 'rating' | 'duration' | 'enrollment'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSpecialty = selectedSpecialty === 'all' || course.specialty === selectedSpecialty;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;

      return matchesSearch && matchesSpecialty && matchesLevel;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'rating':
          return b.averageRating - a.averageRating;
        case 'duration':
          return a.duration - b.duration;
        case 'enrollment':
          return b.enrollmentCount - a.enrollmentCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [courses, searchTerm, selectedSpecialty, selectedLevel, sortBy]);

  return (
    <div className="min-h-screen bg-neutral-black">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Catálogo de Cursos de Cardiología
          </h1>
          <p className="text-xl text-neutral-light-grey max-w-3xl mx-auto">
            Explora nuestra completa biblioteca de cursos especializados en cardiología, 
            impartidos por los mejores expertos del área cardiovascular.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-neutral-dark-grey rounded-xl p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-light-grey w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar cursos, instructores, temas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white placeholder-neutral-light-grey focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Specialty Filter */}
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value as CardiologySpecialty | 'all')}
                className="px-4 py-2 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white focus:border-primary-blue"
              >
                <option value="all">Todas las Especialidades</option>
                <option value="clinical_general">Cardiología Clínica General</option>
                <option value="interventional">Cardiología Intervencionista</option>
                <option value="electrophysiology">Electrofisiología y Arritmias</option>
                <option value="cardiovascular_imaging">Imagen Cardiovascular</option>
                <option value="pediatric_congenital">Cardiología Pediátrica</option>
                <option value="sports_rehabilitation">Cardiología del Deporte</option>
                <option value="prevention_nutrition">Prevención y Nutrición</option>
                <option value="research_advances">Investigación y Avances</option>
              </select>

              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as CourseLevel | 'all')}
                className="px-4 py-2 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white focus:border-primary-blue"
              >
                <option value="all">Todos los Niveles</option>
                <option value="beginner">Principiante</option>
                <option value="intermediate">Intermedio</option>
                <option value="advanced">Avanzado</option>
                <option value="expert">Experto</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-4 py-2 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white focus:border-primary-blue"
              >
                <option value="rating">Mejor Calificados</option>
                <option value="title">Título A-Z</option>
                <option value="duration">Duración</option>
                <option value="enrollment">Más Populares</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-blue text-white' : 'bg-neutral-medium-grey text-neutral-light-grey'}`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-blue text-white' : 'bg-neutral-medium-grey text-neutral-light-grey'}`}
              >
                <div className="w-4 h-4 flex flex-col gap-1">
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-neutral-medium-grey">
            <p className="text-neutral-light-grey">
              Mostrando {filteredCourses.length} de {courses.length} cursos
            </p>
          </div>
        </div>

        {/* Course Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
          {filteredCourses.map((course) => (
            viewMode === 'grid' ? (
              <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
            ) : (
              <CourseListItem key={course.id} course={course} onEnroll={onEnroll} />
            )
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-2">No se encontraron cursos</h3>
            <p className="text-neutral-light-grey">
              Intenta ajustar los filtros o el término de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
}

function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <div className="bg-neutral-dark-grey rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      {/* Course Thumbnail */}
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        {course.isLive && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            🔴 En Vivo
          </div>
        )}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {course.duration}h
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Specialty Badge */}
        <div className="mb-3">
          <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium">
            {getSpecialtyName(course.specialty)}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary-blue transition-colors">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="text-neutral-light-grey text-sm mb-4 line-clamp-3">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={course.instructor.avatar} 
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-neutral-light-grey">{course.instructor.name}</span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-neutral-light-grey">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>{course.averageRating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.enrollmentCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            <span>{course.totalModules} módulos</span>
          </div>
        </div>

        {/* Price and Enroll */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {course.price ? (
              <>
                {course.discountPrice && (
                  <span className="text-neutral-light-grey line-through text-sm">
                    €{course.price}
                  </span>
                )}
                <span className="text-white font-bold">
                  €{course.discountPrice || course.price}
                </span>
              </>
            ) : (
              <span className="text-primary-teal font-bold">GRATIS</span>
            )}
          </div>
          <button
            onClick={() => onEnroll?.(course.id)}
            className="btn-primary text-sm px-4 py-2"
          >
            Inscribirse
          </button>
        </div>

        {/* Certification Badge */}
        {course.certificationOffered && (
          <div className="mt-3 flex items-center gap-2 text-yellow-500 text-sm">
            <Award className="w-4 h-4" />
            <span>Certificado incluido</span>
          </div>
        )}
      </div>
    </div>
  );
}

function CourseListItem({ course, onEnroll }: CourseCardProps) {
  return (
    <div className="bg-neutral-dark-grey rounded-xl p-6 hover:bg-neutral-medium-grey/30 transition-all duration-300">
      <div className="flex items-start gap-6">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-32 h-24 object-cover rounded-lg"
          />
          {course.isLive && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs">
              🔴 En Vivo
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium">
                {getSpecialtyName(course.specialty)}
              </span>
              <h3 className="text-xl font-semibold text-white mt-2 hover:text-primary-blue transition-colors">
                {course.title}
              </h3>
            </div>
            <div className="text-right">
              {course.price ? (
                <div className="flex items-center gap-2">
                  {course.discountPrice && (
                    <span className="text-neutral-light-grey line-through text-sm">
                      €{course.price}
                    </span>
                  )}
                  <span className="text-white font-bold text-lg">
                    €{course.discountPrice || course.price}
                  </span>
                </div>
              ) : (
                <span className="text-primary-teal font-bold text-lg">GRATIS</span>
              )}
            </div>
          </div>

          <p className="text-neutral-light-grey mb-4 line-clamp-2">
            {course.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-neutral-light-grey">
              <div className="flex items-center gap-2">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>{course.instructor.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>{course.averageRating.toFixed(1)} ({course.totalReviews})</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}h</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.enrollmentCount} estudiantes</span>
              </div>
            </div>

            <button
              onClick={() => onEnroll?.(course.id)}
              className="btn-primary px-6 py-2"
            >
              Inscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getSpecialtyName(specialty: CardiologySpecialty): string {
  const specialties: Record<CardiologySpecialty, string> = {
    [CardiologySpecialty.CLINICAL_GENERAL]: 'Cardiología Clínica',
    [CardiologySpecialty.INTERVENTIONAL]: 'Intervencionista',
    [CardiologySpecialty.ELECTROPHYSIOLOGY]: 'Electrofisiología',
    [CardiologySpecialty.CARDIOVASCULAR_IMAGING]: 'Imagen Cardiovascular',
    [CardiologySpecialty.PEDIATRIC_CONGENITAL]: 'Pediátrica',
    [CardiologySpecialty.SPORTS_REHABILITATION]: 'Deporte',
    [CardiologySpecialty.PREVENTION_NUTRITION]: 'Prevención',
    [CardiologySpecialty.RESEARCH_ADVANCES]: 'Investigación'
  };
  return specialties[specialty] || specialty;
}
