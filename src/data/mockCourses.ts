import { Course, CourseModule, Lesson, Instructor, LessonType, ResourceType, CourseLevel, CardiologySpecialty as CourseCardiologySpecialty } from '@/types/course';
import { CardiologySpecialty, ProfessionalLevel, UserProfile, AchievementCategory, UserProgress, UserCertification, UserStats, Achievement } from '@/types/user';

// Mock Instructors
const instructors: Instructor[] = [
  {
    id: 'inst_1',
    name: 'Dr. María Elena González',
    title: 'Cardióloga Intervencionista',
    specialties: [CardiologySpecialty.INTERVENTIONAL, CardiologySpecialty.CLINICAL_GENERAL],
    institution: 'Hospital Universitario La Paz, Madrid',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    bio: 'Especialista en cardiología intervencionista con más de 15 años de experiencia. Pionera en técnicas de angioplastia compleja y directora del programa de hemodinamia.',
    credentials: [
      'MD, Universidad Complutense de Madrid',
      'Fellowship en Cardiología Intervencionista, Mayo Clinic',
      'Certificación ESC en Cardiología Intervencionista',
      'Miembro del Colegio Americano de Cardiología'
    ],
    experience: 'Más de 3,000 procedimientos de cateterismo cardíaco realizados. Autora de 45 publicaciones científicas en revistas internacionales.',
    coursesCount: 8,
    studentsCount: 2450,
    rating: 4.9
  },
  {
    id: 'inst_2',
    name: 'Dr. Carlos Martínez Ruiz',
    title: 'Electrofisiólogo Cardíaco',
    specialties: [CardiologySpecialty.ELECTROPHYSIOLOGY],
    institution: 'Hospital Clínic Barcelona',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    bio: 'Experto en electrofisiología cardíaca y ablación de arritmias complejas. Líder en implantación de dispositivos de estimulación cardíaca.',
    credentials: [
      'MD, Universidad de Barcelona',
      'Fellowship en Electrofisiología, Hospital Johns Hopkins',
      'Certificación europea en Electrofisiología',
      'Director del laboratorio de EP'
    ],
    experience: 'Especialista en ablación de fibrilación auricular y taquicardias complejas. Más de 1,500 procedimientos de ablación realizados.',
    coursesCount: 6,
    studentsCount: 1850,
    rating: 4.8
  },
  {
    id: 'inst_3',
    name: 'Dra. Ana Sofía Herrera',
    title: 'Especialista en Imagen Cardiovascular',
    specialties: [CardiologySpecialty.CARDIOVASCULAR_IMAGING],
    institution: 'Instituto Cardiovascular de Buenos Aires',
    avatar: 'https://images.unsplash.com/photo-1594824747637-2c4df5fddea4?w=400&h=400&fit=crop&crop=face',
    bio: 'Referente internacional en ecocardiografía avanzada y resonancia magnética cardíaca. Pionera en técnicas de imagen 3D.',
    credentials: [
      'MD, Universidad de Buenos Aires',
      'Fellowship en Imagen Cardiovascular, Cleveland Clinic',
      'Certificación FASE en Ecocardiografía',
      'Directora de Imagen Cardiovascular'
    ],
    experience: 'Más de 10,000 ecocardiogramas realizados. Experta en valvulopatías y cardiopatías congénitas del adulto.',
    coursesCount: 12,
    studentsCount: 3200,
    rating: 4.9
  }
];

// Mock Course Modules
const clinicalGeneralModules: CourseModule[] = [
  {
    id: 'mod_cg_1',
    courseId: 'course_1',
    title: 'Fundamentos de la Electrocardiografía',
    description: 'Interpretación sistemática del ECG de 12 derivaciones',
    order: 1,
    duration: 4,
    isLocked: false,
    lessons: [
      {
        id: 'lesson_1_1',
        moduleId: 'mod_cg_1',
        title: 'Anatomía electrofisiológica del corazón',
        type: LessonType.VIDEO,
        content: {
          videoUrl: '/videos/ecg-anatomy.mp4',
          videoDuration: 25
        },
        duration: 25,
        order: 1
      },
      {
        id: 'lesson_1_2',
        moduleId: 'mod_cg_1',
        title: 'Sistema de conducción cardíaco',
        type: LessonType.VIDEO,
        content: {
          videoUrl: '/videos/cardiac-conduction.mp4',
          videoDuration: 30
        },
        duration: 30,
        order: 2
      },
      {
        id: 'lesson_1_3',
        moduleId: 'mod_cg_1',
        title: 'Interpretación sistemática del ECG',
        type: LessonType.INTERACTIVE,
        content: {
          interactiveContent: 'ecg-interpretation-simulator'
        },
        duration: 45,
        order: 3
      }
    ]
  },
  {
    id: 'mod_cg_2',
    courseId: 'course_1',
    title: 'Hipertensión Arterial y Riesgo Cardiovascular',
    description: 'Diagnóstico, estratificación y manejo integral de la HTA',
    order: 2,
    duration: 6,
    isLocked: false,
    lessons: [
      {
        id: 'lesson_2_1',
        moduleId: 'mod_cg_2',
        title: 'Fisiopatología de la hipertensión',
        type: LessonType.VIDEO,
        content: {
          videoUrl: '/videos/hypertension-pathophysiology.mp4',
          videoDuration: 35
        },
        duration: 35,
        order: 1
      },
      {
        id: 'lesson_2_2',
        moduleId: 'mod_cg_2',
        title: 'Evaluación del riesgo cardiovascular',
        type: LessonType.CASE_STUDY,
        content: {
          caseStudyData: {
            id: 'case_hta_1',
            title: 'Paciente con HTA de novo',
            patientInfo: {
              age: 55,
              gender: 'M',
              clinicalHistory: 'Varón de 55 años con HTA recién diagnosticada',
              symptoms: ['Cefalea matutina', 'Mareos ocasionales']
            },
            diagnosticData: {
              ecg: 'Ritmo sinusal, sin alteraciones agudas',
              labs: { creatinina: 1.2, colesterol: 240 }
            },
            questions: [
              {
                id: 'q1',
                question: '¿Cuál sería el primer paso en la evaluación?',
                type: 'multiple_choice',
                options: ['MAPA 24h', 'Ecocardiograma', 'Fondo de ojo', 'Todas las anteriores'],
                correctAnswer: ['Todas las anteriores']
              }
            ],
            solution: {
              diagnosis: 'Hipertensión arterial estadio 1',
              treatment: 'IECA + modificaciones del estilo de vida',
              explanation: 'Evaluación integral del riesgo cardiovascular',
              learningPoints: ['Importancia de la evaluación completa', 'Estratificación del riesgo']
            }
          }
        },
        duration: 60,
        order: 2
      }
    ]
  }
];

// Mock Courses
export const mockCourses: Course[] = [
  {
    id: 'course_1',
    title: 'Cardiología Clínica Esencial: ECG e Hipertensión',
    description: 'Domina los fundamentos de la interpretación electrocardiográfica y el manejo integral de la hipertensión arterial. Un curso práctico con casos reales para cardiólogos y médicos generales.',
    shortDescription: 'Fundamentos de ECG e hipertensión arterial con casos clínicos prácticos',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    instructor: instructors[0],
    specialty: CourseCardiologySpecialty.CLINICAL_GENERAL,
    level: 'intermediate' as any,
    duration: 12,
    totalModules: 4,
    totalLessons: 16,
    price: 299,
    discountPrice: 199,
    language: 'es',
    tags: ['ECG', 'Hipertensión', 'Casos Clínicos', 'Diagnóstico'],
    prerequisites: ['Conocimientos básicos de cardiología', 'Anatomía cardiovascular'],
    learningObjectives: [
      'Interpretar sistemáticamente un ECG de 12 derivaciones',
      'Identificar las arritmias más frecuentes',
      'Estratificar el riesgo cardiovascular en hipertensos',
      'Aplicar las guías actuales de manejo de HTA',
      'Resolver casos clínicos complejos'
    ],
    certificationOffered: true,
    isLive: false,
    modules: clinicalGeneralModules,
    resources: [
      {
        id: 'res_1',
        title: 'Guía de interpretación ECG',
        type: ResourceType.PDF,
        url: '/resources/ecg-guide.pdf',
        downloadable: true
      },
      {
        id: 'res_2',
        title: 'Calculadora de riesgo cardiovascular',
        type: ResourceType.TEMPLATE,
        url: '/tools/cv-risk-calculator',
        downloadable: false
      }
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    publishedAt: new Date('2024-01-20'),
    isPublished: true,
    enrollmentCount: 1245,
    averageRating: 4.8,
    totalReviews: 156
  },
  {
    id: 'course_2',
    title: 'Cardiología Intervencionista Avanzada: TAVI y Estructural',
    description: 'Curso especializado en terapias estructurales cardíacas. Aprende las técnicas más avanzadas en implante de válvula aórtica transcatéter (TAVI) y reparación mitral percutánea.',
    shortDescription: 'Terapias estructurales: TAVI, MitraClip y procedimientos complejos',
    thumbnail: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
    instructor: instructors[0],
    specialty: CourseCardiologySpecialty.INTERVENTIONAL,
    level: 'advanced' as any,
    duration: 20,
    totalModules: 6,
    totalLessons: 24,
    price: 599,
    language: 'es',
    tags: ['TAVI', 'MitraClip', 'Válvulas', 'Intervencionismo', 'Cardiopatía Estructural'],
    prerequisites: ['Experiencia en cateterismo cardíaco', 'Conocimiento de anatomía valvular'],
    learningObjectives: [
      'Dominar la técnica de implante TAVI',
      'Indicaciones y contraindicaciones de terapias estructurales',
      'Manejo de complicaciones en procedimientos complejos',
      'Selección adecuada de pacientes',
      'Trabajo en equipo multidisciplinar (Heart Team)'
    ],
    certificationOffered: true,
    isLive: true,
    liveSchedule: [
      {
        id: 'live_1',
        title: 'Casos en vivo desde el laboratorio',
        startTime: new Date('2024-02-15T14:00:00Z'),
        endTime: new Date('2024-02-15T16:00:00Z'),
        timezone: 'Europe/Madrid',
        isRecorded: true
      }
    ],
    modules: [], // Would be populated with structural cardiology modules
    resources: [
      {
        id: 'res_3',
        title: 'Atlas de anatomía valvular',
        type: ResourceType.PDF,
        url: '/resources/valve-anatomy-atlas.pdf',
        downloadable: true
      }
    ],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25'),
    publishedAt: new Date('2024-01-25'),
    isPublished: true,
    enrollmentCount: 587,
    averageRating: 4.9,
    totalReviews: 89
  },
  {
    id: 'course_3',
    title: 'Electrofisiología Práctica: Ablación de Fibrilación Auricular',
    description: 'Masterclass en ablación de fibrilación auricular. Desde los fundamentos electrofisiológicos hasta las técnicas más avanzadas de mapping 3D y ablación.',
    shortDescription: 'Técnicas avanzadas de ablación de FA con mapping 3D',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    instructor: instructors[1],
    specialty: CourseCardiologySpecialty.RESEARCH_ADVANCES,
    level: 'expert' as any,
    duration: 18,
    totalModules: 5,
    totalLessons: 20,
    price: 799,
    discountPrice: 599,
    language: 'es',
    tags: ['Fibrilación Auricular', 'Ablación', 'Mapping 3D', 'Electrofisiología'],
    prerequisites: ['Conocimientos avanzados en EP', 'Experiencia en laboratorio de EP'],
    learningObjectives: [
      'Comprender la fisiopatología de la FA',
      'Dominar técnicas de mapping electroanatómico',
      'Realizar ablación circunferencial de venas pulmonares',
      'Manejo de complicaciones en ablación de FA',
      'Estrategias en FA persistente de larga duración'
    ],
    certificationOffered: true,
    isLive: false,
    modules: [], // Would be populated with EP modules
    resources: [],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-30'),
    publishedAt: new Date('2024-01-30'),
    isPublished: true,
    enrollmentCount: 234,
    averageRating: 4.9,
    totalReviews: 45
  },
  {
    id: 'course_4',
    title: 'Ecocardiografía Avanzada: Valvulopatías y Cardiopatía Isquémica',
    description: 'Curso completo de ecocardiografía avanzada enfocado en la evaluación de valvulopatías y detección de cardiopatía isquémica. Incluye técnicas 3D y strain.',
    shortDescription: 'Ecocardiografía avanzada con técnicas 3D y strain imaging',
    thumbnail: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop',
    instructor: instructors[2],
    specialty: CourseCardiologySpecialty.CARDIOVASCULAR_IMAGING,
    level: 'advanced' as any,
    duration: 16,
    totalModules: 5,
    totalLessons: 22,
    price: 449,
    language: 'es',
    tags: ['Ecocardiografía', 'Valvulopatías', 'Strain', '3D', 'Isquemia'],
    prerequisites: ['Ecocardiografía básica', 'Interpretación de Doppler'],
    learningObjectives: [
      'Evaluación cuantitativa de valvulopatías',
      'Técnicas de strain y speckle tracking',
      'Ecocardiografía 3D en tiempo real',
      'Detección de isquemia con eco-estrés',
      'Ecocardiografía intraoperatoria'
    ],
    certificationOffered: true,
    isLive: false,
    modules: [], // Would be populated with imaging modules
    resources: [
      {
        id: 'res_4',
        title: 'Protocolo de ecocardiografía avanzada',
        type: ResourceType.CHECKLIST,
        url: '/resources/advanced-echo-protocol.pdf',
        downloadable: true
      }
    ],
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2024-01-18'),
    publishedAt: new Date('2024-01-18'),
    isPublished: true,
    enrollmentCount: 892,
    averageRating: 4.7,
    totalReviews: 124
  },
  {
    id: 'course_5',
    title: 'Cardiología del Deporte: Evaluación Preparticipación',
    description: 'Guía completa para la evaluación cardiovascular en atletas. Aprende a detectar patologías que predisponen a muerte súbita y establece protocolos de seguimiento.',
    shortDescription: 'Evaluación cardiovascular en atletas y prevención de muerte súbita',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    instructor: instructors[0],
    specialty: CourseCardiologySpecialty.SPORTS_REHABILITATION,
    level: 'intermediate' as any,
    duration: 10,
    totalModules: 4,
    totalLessons: 15,
    price: 0, // Free course
    language: 'es',
    tags: ['Deporte', 'Atletas', 'Muerte Súbita', 'Preparticipación', 'Cardiomiopatía'],
    prerequisites: ['Cardiología básica', 'Interpretación de ECG'],
    learningObjectives: [
      'Protocolo de evaluación preparticipación',
      'Identificar cardiopatías de riesgo en atletas',
      'Interpretación del ECG del deportista',
      'Criterios de descalificación deportiva',
      'Rehabilitación cardíaca en deportistas'
    ],
    certificationOffered: true,
    isLive: false,
    modules: [], // Would be populated with sports cardiology modules
    resources: [
      {
        id: 'res_5',
        title: 'Guías ESC Cardiología del Deporte',
        type: ResourceType.GUIDELINE,
        url: '/resources/esc-sports-cardiology.pdf',
        downloadable: true
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
    publishedAt: new Date('2024-01-15'),
    isPublished: true,
    enrollmentCount: 1567,
    averageRating: 4.6,
    totalReviews: 203
  },
  {
    id: 'course_6',
    title: 'Prevención Cardiovascular: Nutrición y Estilo de Vida',
    description: 'Estrategias evidence-based para la prevención primaria y secundaria cardiovascular. Enfoque integral en nutrición, ejercicio y factores psicosociales.',
    shortDescription: 'Prevención integral: dieta, ejercicio y factores psicosociales',
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    instructor: instructors[2],
    specialty: CourseCardiologySpecialty.PREVENTION_NUTRITION,
    level: 'beginner' as any,
    duration: 8,
    totalModules: 3,
    totalLessons: 12,
    price: 149,
    discountPrice: 99,
    language: 'es',
    tags: ['Prevención', 'Nutrición', 'Ejercicio', 'Estilo de Vida', 'Factores de Riesgo'],
    prerequisites: ['Conocimientos básicos de medicina'],
    learningObjectives: [
      'Estratificar el riesgo cardiovascular',
      'Prescribir dieta mediterránea y DASH',
      'Protocolos de ejercicio terapéutico',
      'Manejo del estrés y factores psicosociales',
      'Adherencia terapéutica a largo plazo'
    ],
    certificationOffered: true,
    isLive: false,
    modules: [], // Would be populated with prevention modules
    resources: [
      {
        id: 'res_6',
        title: 'Calculadoras de riesgo cardiovascular',
        type: ResourceType.TEMPLATE,
        url: '/tools/risk-calculators',
        downloadable: false
      }
    ],
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2024-01-10'),
    publishedAt: new Date('2024-01-10'),
    isPublished: true,
    enrollmentCount: 2134,
    averageRating: 4.5,
    totalReviews: 287
  }
];

export const mockUserProgress = [
  {
    userId: 'user_1',
    courseId: 'course_1',
    courseName: 'Cardiología Clínica Esencial: ECG e Hipertensión',
    progressPercentage: 75,
    totalHours: 12,
    completedHours: 9,
    lastAccessedAt: new Date('2024-01-25'),
    startedAt: new Date('2024-01-10'),
    currentModule: 'Módulo 3: Manejo de la Hipertensión',
    currentLesson: 'Tratamiento farmacológico personalizado'
  },
  {
    userId: 'user_1',
    courseId: 'course_4',
    courseName: 'Ecocardiografía Avanzada: Valvulopatías y Cardiopatía Isquémica',
    progressPercentage: 45,
    totalHours: 16,
    completedHours: 7.2,
    lastAccessedAt: new Date('2024-01-23'),
    startedAt: new Date('2024-01-05'),
    currentModule: 'Módulo 2: Técnicas de Strain',
    currentLesson: 'Speckle tracking en la práctica clínica'
  },
  {
    userId: 'user_1',
    courseId: 'course_5',
    courseName: 'Cardiología del Deporte: Evaluación Preparticipación',
    progressPercentage: 100,
    totalHours: 10,
    completedHours: 10,
    lastAccessedAt: new Date('2024-01-20'),
    startedAt: new Date('2024-01-01'),
    completedAt: new Date('2024-01-20')
  }
];

export const mockUserCertifications = [
  {
    id: 'cert_1',
    userId: 'user_1',
    courseId: 'course_5',
    courseName: 'Cardiología del Deporte: Evaluación Preparticipación',
    certificateUrl: '/certificates/cert_sport_cardiology_user1.pdf',
    issueDate: new Date('2024-01-21'),
    grade: 9.2,
    credentialId: 'CARDIO-SPORT-2024-001247'
  }
];

export const mockUserStats = {
  userId: 'user_1',
  totalCoursesEnrolled: 3,
  totalCoursesCompleted: 1,
  totalStudyHours: 47,
  totalCertificates: 1,
  currentStreak: 5,
  longestStreak: 12,
  averageGrade: 85,
  rank: 247,
  achievements: [
    {
      id: 'ach_1',
      name: 'Primera Certificación',
      description: 'Completaste tu primer curso con éxito',
      icon: '🎯',
      category: 'completion' as any,
      earnedAt: new Date('2024-01-21')
    },
    {
      id: 'ach_2',
      name: 'Estudiante Constante',
      description: 'Mantuviste una racha de 7 días consecutivos',
      icon: '🔥',
      category: 'consistency' as any,
      earnedAt: new Date('2024-01-25')
    },
    {
      id: 'ach_3',
      name: 'Especialista en Deporte',
      description: 'Dominaste la cardiología del deporte',
      icon: '🏃‍♂️',
      category: 'specialty' as any,
      earnedAt: new Date('2024-01-21')
    }
  ]
};

export const mockUserProfile: UserProfile = {
  id: 'user_1',
  email: 'dr.rodriguez@hospital.com',
  name: 'Dr. María Elena Rodríguez',
  firstName: 'María Elena',
  lastName: 'Rodríguez',
  avatar: 'https://images.unsplash.com/photo-1594824947933-2dc1b4e15a87?w=150&h=150&fit=crop&crop=face',
  specialty: CardiologySpecialty.CLINICAL_GENERAL,
  institution: 'Hospital Nacional de Cardiología',
  country: 'España',
  professionalLevel: ProfessionalLevel.SENIOR_CONSULTANT,
  createdAt: new Date('2023-06-15'),
  updatedAt: new Date('2024-01-20')
};
