'use client';

import React, { useState } from 'react';
import { Play, Clock, Star, Users, Book, Award, Download, MessageCircle, ChevronRight, Check, Lock } from 'lucide-react';
import { Course, CourseModule, Lesson } from '@/types/course';

interface CourseDetailProps {
  course: Course;
  isEnrolled?: boolean;
  userProgress?: {
    completedLessons: string[];
    currentLesson?: string;
    progressPercentage: number;
  };
  onEnroll?: () => void;
  onStartLesson?: (lessonId: string) => void;
}

export default function CourseDetail({ course, isEnrolled = false, userProgress, onEnroll, onStartLesson }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  const [expandedModules, setExpandedModules] = useState<string[]>([]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="min-h-screen bg-neutral-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue/20 to-accent-teal/20 border-b border-neutral-medium-grey">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="px-4 py-2 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium">
                  {getSpecialtyName(course.specialty)}
                </span>
                <span className="ml-3 px-3 py-1 bg-neutral-medium-grey text-neutral-light-grey rounded-full text-sm">
                  {getLevelName(course.level)}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-neutral-light-grey mb-6">{course.description}</p>
              
              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 text-neutral-light-grey">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-gold fill-current" />
                  <span className="font-medium text-white">{course.averageRating.toFixed(1)}</span>
                  <span>({course.totalReviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.enrollmentCount} estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration} horas totales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  <span>{course.totalModules} módulos • {course.totalLessons} lecciones</span>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Lo que aprenderás</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-light-grey">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-dark-grey rounded-xl p-6 sticky top-8">
                {/* Course Preview Video/Image */}
                <div className="relative mb-6 group cursor-pointer">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  {course.isLive && (
                    <div className="absolute top-4 left-4 bg-primary-red text-white px-3 py-2 rounded-full text-sm font-medium">
                      🔴 Clase en Vivo
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {course.price ? (
                    <div>
                      {course.discountPrice && (
                        <div className="text-neutral-light-grey line-through text-lg mb-1">
                          €{course.price}
                        </div>
                      )}
                      <div className="text-3xl font-bold text-white">
                        €{course.discountPrice || course.price}
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-accent-teal">GRATIS</div>
                  )}
                </div>

                {/* Progress (if enrolled) */}
                {isEnrolled && userProgress && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-light-grey">Tu progreso</span>
                      <span className="text-white font-medium">{userProgress.progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-neutral-medium-grey rounded-full h-2">
                      <div
                        className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                        style={{ width: `${userProgress.progressPercentage}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action Button */}
                {isEnrolled ? (
                  <button 
                    onClick={() => onStartLesson?.(userProgress?.currentLesson || course.modules[0]?.lessons[0]?.id)}
                    className="w-full btn-primary py-4 text-lg font-medium mb-4"
                  >
                    {userProgress?.progressPercentage ? 'Continuar Curso' : 'Comenzar Curso'}
                  </button>
                ) : (
                  <button 
                    onClick={onEnroll}
                    className="w-full btn-primary py-4 text-lg font-medium mb-4"
                  >
                    Inscribirse Ahora
                  </button>
                )}

                {/* Course Features */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-neutral-light-grey">
                    <Award className="w-4 h-4 text-accent-gold" />
                    <span>Certificado de finalización</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-light-grey">
                    <Download className="w-4 h-4 text-accent-teal" />
                    <span>Recursos descargables</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-light-grey">
                    <MessageCircle className="w-4 h-4 text-primary-blue" />
                    <span>Acceso al foro de discusión</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-light-grey">
                    <Clock className="w-4 h-4" />
                    <span>Acceso de por vida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container-custom py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-neutral-dark-grey rounded-lg p-1 mb-8">
          <TabButton
            label="Descripción"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <TabButton
            label="Contenido del Curso"
            isActive={activeTab === 'curriculum'}
            onClick={() => setActiveTab('curriculum')}
          />
          <TabButton
            label="Instructor"
            isActive={activeTab === 'instructor'}
            onClick={() => setActiveTab('instructor')}
          />
          <TabButton
            label="Reseñas"
            isActive={activeTab === 'reviews'}
            onClick={() => setActiveTab('reviews')}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-neutral-dark-grey rounded-xl p-8">
          {activeTab === 'overview' && <OverviewTab course={course} />}
          {activeTab === 'curriculum' && (
            <CurriculumTab 
              modules={course.modules} 
              isEnrolled={isEnrolled}
              completedLessons={userProgress?.completedLessons || []}
              expandedModules={expandedModules}
              onToggleModule={toggleModule}
              onStartLesson={onStartLesson}
            />
          )}
          {activeTab === 'instructor' && <InstructorTab instructor={course.instructor} />}
          {activeTab === 'reviews' && <ReviewsTab courseId={course.id} />}
        </div>
      </div>
    </div>
  );
}

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
        isActive
          ? 'bg-primary-blue text-white shadow-lg'
          : 'text-neutral-light-grey hover:text-white hover:bg-neutral-medium-grey'
      }`}
    >
      {label}
    </button>
  );
}

function OverviewTab({ course }: { course: Course }) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">Descripción del Curso</h3>
        <div className="prose prose-invert max-w-none">
          <p className="text-neutral-light-grey leading-relaxed">
            {course.description}
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      {course.prerequisites.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Requisitos Previos</h3>
          <ul className="space-y-2">
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                <span className="text-neutral-light-grey">{prerequisite}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Temas Clave</h3>
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-2 bg-neutral-medium-grey text-neutral-light-grey rounded-lg text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CurriculumTab({ 
  modules, 
  isEnrolled, 
  completedLessons, 
  expandedModules, 
  onToggleModule, 
  onStartLesson 
}: {
  modules: CourseModule[];
  isEnrolled: boolean;
  completedLessons: string[];
  expandedModules: string[];
  onToggleModule: (moduleId: string) => void;
  onStartLesson?: (lessonId: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-white mb-6">Contenido del Curso</h3>
      
      {modules.map((module, moduleIndex) => {
        const isExpanded = expandedModules.includes(module.id);
        const completedInModule = module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length;
        
        return (
          <div key={module.id} className="border border-neutral-medium-grey rounded-lg overflow-hidden">
            {/* Module Header */}
            <button
              onClick={() => onToggleModule(module.id)}
              className="w-full p-6 bg-neutral-medium-grey hover:bg-neutral-light-grey/10 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Módulo {moduleIndex + 1}: {module.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-neutral-light-grey">
                    <span>{module.lessons.length} lecciones</span>
                    <span>{module.duration}h</span>
                    {isEnrolled && (
                      <span className="text-primary-teal">
                        {completedInModule}/{module.lessons.length} completadas
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-neutral-light-grey transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </div>
            </button>

            {/* Module Lessons */}
            {isExpanded && (
              <div className="border-t border-neutral-medium-grey">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isLocked = !isEnrolled && lessonIndex > 0; // First lesson preview for non-enrolled
                  
                  return (
                    <div 
                      key={lesson.id} 
                      className="flex items-center gap-4 p-4 border-b border-neutral-medium-grey/30 last:border-b-0 hover:bg-neutral-light-grey/5"
                    >
                      {/* Lesson Status Icon */}
                      <div className="flex-shrink-0">
                        {isCompleted ? (
                          <div className="w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : isLocked ? (
                          <Lock className="w-5 h-5 text-neutral-medium-grey" />
                        ) : (
                          <Play className="w-5 h-5 text-primary-blue" />
                        )}
                      </div>

                      {/* Lesson Info */}
                      <div className="flex-1">
                        <h5 className={`font-medium ${isLocked ? 'text-neutral-medium-grey' : 'text-white'}`}>
                          {lessonIndex + 1}. {lesson.title}
                        </h5>
                        <div className="flex items-center gap-3 text-sm text-neutral-light-grey">
                          <span>{getLessonTypeIcon(lesson.type)} {getLessonTypeName(lesson.type)}</span>
                          <span>{lesson.duration} min</span>
                        </div>
                      </div>

                      {/* Lesson Action */}
                      <div className="flex-shrink-0">
                        {!isLocked ? (
                          <button
                            onClick={() => onStartLesson?.(lesson.id)}
                            className="text-primary-blue hover:text-primary-teal transition-colors text-sm font-medium"
                          >
                            {isCompleted ? 'Revisar' : 'Reproducir'}
                          </button>
                        ) : (
                          <span className="text-neutral-medium-grey text-sm">Bloqueado</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function InstructorTab({ instructor }: { instructor: Course['instructor'] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img 
          src={instructor.avatar} 
          alt={instructor.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-white mb-2">{instructor.name}</h3>
          <p className="text-lg text-primary-blue mb-4">{instructor.title}</p>
          <div className="flex items-center gap-6 text-sm text-neutral-light-grey mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent-gold fill-current" />
              <span>{instructor.rating.toFixed(1)} rating</span>
            </div>
            <span>{instructor.coursesCount} cursos</span>
            <span>{instructor.studentsCount} estudiantes</span>
          </div>
          <p className="text-neutral-light-grey leading-relaxed">{instructor.bio}</p>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-3">Experiencia y Credenciales</h4>
        <p className="text-neutral-light-grey mb-4">{instructor.experience}</p>
        <ul className="space-y-2">
          {instructor.credentials.map((credential, index) => (
            <li key={index} className="flex items-start gap-3">
              <Award className="w-4 h-4 text-accent-gold flex-shrink-0 mt-1" />
              <span className="text-neutral-light-grey">{credential}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ReviewsTab({ courseId }: { courseId: string }) {
  // Mock reviews - in real app, fetch from API
  const reviews = [
    {
      id: '1',
      userName: 'Dr. María González',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excelente curso con casos clínicos muy bien explicados. La metodología es clara y práctica.'
    },
    {
      id: '2',
      userName: 'Dr. Carlos Rodríguez',
      avatar: '/api/placeholder/40/40',
      rating: 4,
      date: '2024-01-10',
      comment: 'Muy buen contenido, aunque me gustaría que incluyera más casos de la práctica diaria.'
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">Reseñas de Estudiantes</h3>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border border-neutral-medium-grey rounded-lg p-6">
            <div className="flex items-start gap-4">
              <img 
                src={review.avatar} 
                alt={review.userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h5 className="font-medium text-white">{review.userName}</h5>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-accent-gold fill-current' : 'text-neutral-medium-grey'}`}
                      />
                    ))}
                  </div>
                  <span className="text-neutral-light-grey text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-neutral-light-grey">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper functions
function getSpecialtyName(specialty: string): string {
  const specialties: Record<string, string> = {
    'clinical_general': 'Cardiología Clínica General',
    'interventional': 'Cardiología Intervencionista',
    'electrophysiology': 'Electrofisiología y Arritmias',
    'cardiovascular_imaging': 'Imagen Cardiovascular',
    'pediatric_congenital': 'Cardiología Pediátrica',
    'sports_rehabilitation': 'Cardiología del Deporte',
    'prevention_nutrition': 'Prevención y Nutrición',
    'research_advances': 'Investigación y Avances'
  };
  return specialties[specialty] || specialty;
}

function getLevelName(level: string): string {
  const levels: Record<string, string> = {
    'beginner': 'Principiante',
    'intermediate': 'Intermedio', 
    'advanced': 'Avanzado',
    'expert': 'Experto'
  };
  return levels[level] || level;
}

function getLessonTypeIcon(type: string): string {
  const icons: Record<string, string> = {
    'video': '🎥',
    'live_class': '🔴',
    'reading': '📖',
    'interactive': '💻',
    'case_study': '🩺',
    'quiz': '❓',
    'assignment': '📝'
  };
  return icons[type] || '📄';
}

function getLessonTypeName(type: string): string {
  const types: Record<string, string> = {
    'video': 'Video',
    'live_class': 'Clase en Vivo',
    'reading': 'Lectura',
    'interactive': 'Interactivo',
    'case_study': 'Caso Clínico',
    'quiz': 'Evaluación',
    'assignment': 'Tarea'
  };
  return types[type] || type;
}
