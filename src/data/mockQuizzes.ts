import { Quiz, Question, QuestionType, QuestionDifficulty, QuizType } from '@/types/evaluation';

// Mock Questions for Cardiology Quiz
const ecgQuestions: Question[] = [
  {
    id: 'q_ecg_1',
    quizId: 'quiz_ecg_basics',
    type: QuestionType.MULTIPLE_CHOICE,
    content: '¿Cuál es la duración normal del intervalo QRS en un ECG de 12 derivaciones?',
    options: [
      { id: 'opt_1', text: 'Menos de 0.08 segundos', isCorrect: false },
      { id: 'opt_2', text: '0.08 - 0.12 segundos', isCorrect: true },
      { id: 'opt_3', text: '0.12 - 0.20 segundos', isCorrect: false },
      { id: 'opt_4', text: 'Más de 0.20 segundos', isCorrect: false }
    ],
    correctAnswers: ['opt_2'],
    explanation: 'El intervalo QRS normal debe ser menor a 0.12 segundos (120 ms). Un QRS prolongado (>0.12s) sugiere alteración en la conducción intraventricular, como bloqueo de rama.',
    difficulty: QuestionDifficulty.EASY,
    points: 1,
    category: 'Electrocardiografía Básica',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb3819047d8?w=600&h=400&fit=crop',
    references: ['Guías ESC de Electrocardiografía 2022', 'Braunwald Cardiología 11ª Ed.']
  },
  {
    id: 'q_ecg_2',
    quizId: 'quiz_ecg_basics',
    type: QuestionType.MULTIPLE_SELECT,
    content: '¿Cuáles de los siguientes hallazgos electrocardiográficos son criterios de hipertrofia ventricular izquierda según Sokolow-Lyon?',
    options: [
      { id: 'opt_5', text: 'SV1 + RV5 o RV6 ≥ 35mm', isCorrect: true },
      { id: 'opt_6', text: 'RaVL ≥ 11mm', isCorrect: true },
      { id: 'opt_7', text: 'Ondas Q patológicas en V5-V6', isCorrect: false },
      { id: 'opt_8', text: 'Desviación del eje hacia la izquierda', isCorrect: false }
    ],
    correctAnswers: ['opt_5', 'opt_6'],
    explanation: 'Los criterios de Sokolow-Lyon para HVI incluyen: SV1 + RV5/V6 ≥35mm o RaVL ≥11mm. Las ondas Q patológicas sugieren infarto previo, no HVI.',
    difficulty: QuestionDifficulty.MEDIUM,
    points: 2,
    category: 'Electrocardiografía Avanzada'
  },
  {
    id: 'q_ecg_3',
    quizId: 'quiz_ecg_basics',
    type: QuestionType.CASE_ANALYSIS,
    content: 'Paciente de 65 años acude a urgencias por dolor torácico de 2 horas de evolución. El ECG muestra elevación del ST en derivaciones II, III y aVF. ¿Cuál es el diagnóstico más probable y qué derivaciones deberían monitorizarse para detectar complicaciones?',
    options: [
      { id: 'opt_9', text: 'IAMCEST inferior, monitorizar V7-V9', isCorrect: false },
      { id: 'opt_10', text: 'IAMCEST inferior, monitorizar V3R-V4R', isCorrect: true },
      { id: 'opt_11', text: 'IAMCEST anterior, monitorizar II, III, aVF', isCorrect: false },
      { id: 'opt_12', text: 'Angina inestable, no requiere derivaciones adicionales', isCorrect: false }
    ],
    correctAnswers: ['opt_10'],
    explanation: 'El patrón de elevación en II, III, aVF indica IAMCEST de cara inferior. Debe monitorizarse V3R-V4R para detectar extensión al ventrículo derecho, complicación frecuente en infartos inferiores.',
    difficulty: QuestionDifficulty.HARD,
    points: 3,
    category: 'Síndrome Coronario Agudo',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop'
  },
  {
    id: 'q_ecg_4',
    quizId: 'quiz_ecg_basics',
    type: QuestionType.TRUE_FALSE,
    content: 'En la fibrilación auricular, la ausencia de ondas P y la irregularidad del ritmo ventricular son hallazgos diagnósticos patognomónicos.',
    options: [
      { id: 'opt_13', text: 'Verdadero', isCorrect: true },
      { id: 'opt_14', text: 'Falso', isCorrect: false }
    ],
    correctAnswers: ['opt_13'],
    explanation: 'Correcto. La fibrilación auricular se caracteriza por la ausencia de ondas P (sustituidas por ondas f) y ritmo ventricular irregularmente irregular, siendo estos hallazgos patognomónicos.',
    difficulty: QuestionDifficulty.EASY,
    points: 1,
    category: 'Arritmias'
  }
];

const hypertensionQuestions: Question[] = [
  {
    id: 'q_hta_1',
    quizId: 'quiz_hypertension',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Según las guías ESC/ESH 2023, ¿cuál es la meta de presión arterial en un paciente diabético de 45 años sin enfermedad cardiovascular establecida?',
    options: [
      { id: 'opt_h1', text: '<140/90 mmHg', isCorrect: false },
      { id: 'opt_h2', text: '<130/80 mmHg', isCorrect: true },
      { id: 'opt_h3', text: '<120/70 mmHg', isCorrect: false },
      { id: 'opt_h4', text: '<110/60 mmHg', isCorrect: false }
    ],
    correctAnswers: ['opt_h2'],
    explanation: 'En pacientes diabéticos menores de 65 años, la meta de PA es <130/80 mmHg según las guías ESC/ESH 2023, considerando la diabetes como factor de riesgo cardiovascular elevado.',
    difficulty: QuestionDifficulty.MEDIUM,
    points: 2,
    category: 'Manejo de Hipertensión'
  },
  {
    id: 'q_hta_2',
    quizId: 'quiz_hypertension',
    type: QuestionType.SHORT_ANSWER,
    content: 'Enumere los 5 componentes principales que deben evaluarse en la estratificación del riesgo cardiovascular de un paciente hipertenso.',
    correctAnswers: ['Factores de riesgo cardiovascular, Lesión de órgano diana, Diabetes mellitus, Enfermedad cardiovascular establecida, Enfermedad renal crónica'],
    explanation: 'Los 5 componentes clave son: 1) Factores de riesgo CV (edad, género, dislipidemia, tabaquismo), 2) Lesión de órgano diana (HVI, microalbuminuria, etc.), 3) Diabetes mellitus, 4) Enfermedad CV establecida, 5) Enfermedad renal crónica.',
    difficulty: QuestionDifficulty.HARD,
    points: 3,
    category: 'Estratificación de Riesgo'
  },
  {
    id: 'q_hta_3',
    quizId: 'quiz_hypertension',
    type: QuestionType.MULTIPLE_SELECT,
    content: '¿Cuáles son las indicaciones para iniciar tratamiento antihipertensivo inmediato en un paciente con HTA grado 1 (140-159/90-99 mmHg)?',
    options: [
      { id: 'opt_h5', text: 'Paciente mayor de 65 años', isCorrect: false },
      { id: 'opt_h6', text: 'Presencia de diabetes mellitus', isCorrect: true },
      { id: 'opt_h7', text: 'Enfermedad cardiovascular establecida', isCorrect: true },
      { id: 'opt_h8', text: 'Riesgo cardiovascular muy alto (≥10% SCORE2)', isCorrect: true },
      { id: 'opt_h9', text: 'Paciente asintomático sin comorbilidades', isCorrect: false }
    ],
    correctAnswers: ['opt_h6', 'opt_h7', 'opt_h8'],
    explanation: 'En HTA grado 1, el tratamiento inmediato está indicado si hay: diabetes, enfermedad CV establecida, riesgo CV muy alto, lesión de órgano diana o enfermedad renal crónica.',
    difficulty: QuestionDifficulty.MEDIUM,
    points: 2,
    category: 'Tratamiento Antihipertensivo'
  }
];

const interventionalQuestions: Question[] = [
  {
    id: 'q_int_1',
    quizId: 'quiz_interventional',
    type: QuestionType.CASE_ANALYSIS,
    content: 'Paciente de 78 años con estenosis aórtica severa sintomática, EuroSCORE II del 8%, FE 45%. Anatomía coronaria normal. ¿Cuál es la estrategia terapéutica más apropiada?',
    options: [
      { id: 'opt_i1', text: 'Cirugía de reemplazo valvular aórtico', isCorrect: false },
      { id: 'opt_i2', text: 'TAVI (implante valvular aórtico transcatéter)', isCorrect: true },
      { id: 'opt_i3', text: 'Valvuloplastia aórtica con balón', isCorrect: false },
      { id: 'opt_i4', text: 'Tratamiento médico conservador', isCorrect: false }
    ],
    correctAnswers: ['opt_i2'],
    explanation: 'Con EuroSCORE II del 8% (riesgo intermedio-alto) y edad avanzada, TAVI es la opción preferida según las guías actuales para estenosis aórtica severa sintomática.',
    difficulty: QuestionDifficulty.EXPERT,
    points: 4,
    category: 'Cardiopatía Estructural',
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop'
  },
  {
    id: 'q_int_2',
    quizId: 'quiz_interventional',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'En un procedimiento de angioplastia primaria, ¿cuál es el tiempo puerta-balón recomendado según las guías ESC?',
    options: [
      { id: 'opt_i5', text: 'Menos de 60 minutos', isCorrect: false },
      { id: 'opt_i6', text: 'Menos de 90 minutos', isCorrect: true },
      { id: 'opt_i7', text: 'Menos de 120 minutos', isCorrect: false },
      { id: 'opt_i8', text: 'Menos de 180 minutos', isCorrect: false }
    ],
    correctAnswers: ['opt_i6'],
    explanation: 'El tiempo puerta-balón recomendado para angioplastia primaria es <90 minutos según las guías ESC, aunque el objetivo ideal es <60 minutos cuando sea posible.',
    difficulty: QuestionDifficulty.MEDIUM,
    points: 2,
    category: 'Síndrome Coronario Agudo'
  }
];

// Mock Quizzes
export const mockQuizzes: Quiz[] = [
  {
    id: 'quiz_ecg_basics',
    courseId: 'course_1',
    title: 'Evaluación: Fundamentos de ECG',
    description: 'Evaluación del módulo de electrocardiografía básica',
    type: QuizType.MODULE_QUIZ,
    timeLimit: 45, // minutes
    totalQuestions: 4,
    passingScore: 70, // percentage
    maxAttempts: 3,
    questions: ecgQuestions,
    isRandomized: true,
    showResults: 'after_completion',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'quiz_hypertension',
    courseId: 'course_1',
    moduleId: 'mod_cg_2',
    title: 'Examen: Hipertensión Arterial',
    description: 'Evaluación comprehensive del manejo de la hipertensión arterial',
    type: QuizType.FINAL_EXAM,
    timeLimit: 60,
    totalQuestions: 3,
    passingScore: 75,
    maxAttempts: 2,
    questions: hypertensionQuestions,
    isRandomized: false,
    showResults: 'immediate',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: 'quiz_interventional',
    courseId: 'course_2',
    title: 'Evaluación Avanzada: Cardiología Intervencionista',
    description: 'Casos clínicos complejos de cardiología intervencionista',
    type: QuizType.COMPETENCY_ASSESSMENT,
    timeLimit: 90,
    totalQuestions: 2,
    passingScore: 80,
    maxAttempts: 1,
    questions: interventionalQuestions,
    isRandomized: true,
    showResults: 'after_completion',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: 'quiz_practice_ecg',
    courseId: 'course_1',
    title: 'Test de Práctica: Interpretación de ECG',
    description: 'Practica tu interpretación electrocardiográfica sin límite de tiempo',
    type: QuizType.PRACTICE_TEST,
    timeLimit: null, // No time limit
    totalQuestions: 4,
    passingScore: 60,
    maxAttempts: null, // Unlimited attempts
    questions: ecgQuestions.map(q => ({ ...q, id: `practice_${q.id}`, quizId: 'quiz_practice_ecg' })),
    isRandomized: true,
    showResults: 'immediate',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  }
];

// Mock Quiz Attempts and Results
export const mockQuizAttempts = [
  {
    id: 'attempt_1',
    userId: 'user_1',
    quizId: 'quiz_ecg_basics',
    attemptNumber: 1,
    startedAt: new Date('2024-01-25T10:00:00Z'),
    completedAt: new Date('2024-01-25T10:35:00Z'),
    timeSpent: 35, // minutes
    answers: [
      { questionId: 'q_ecg_1', selectedAnswers: ['opt_2'], isCorrect: true, points: 1, timeSpent: 120 },
      { questionId: 'q_ecg_2', selectedAnswers: ['opt_5', 'opt_6'], isCorrect: true, points: 2, timeSpent: 180 },
      { questionId: 'q_ecg_3', selectedAnswers: ['opt_9'], isCorrect: false, points: 0, timeSpent: 300 },
      { questionId: 'q_ecg_4', selectedAnswers: ['opt_13'], isCorrect: true, points: 1, timeSpent: 60 }
    ],
    score: 80, // percentage
    passed: true,
    feedback: 'Buen dominio de los fundamentos electrocardiográficos. Revisar el tema de infartos de cara inferior.',
    detailedResults: [
      {
        questionId: 'q_ecg_1',
        question: '¿Cuál es la duración normal del intervalo QRS en un ECG de 12 derivaciones?',
        userAnswer: ['0.08 - 0.12 segundos'],
        correctAnswer: ['0.08 - 0.12 segundos'],
        isCorrect: true,
        explanation: 'El intervalo QRS normal debe ser menor a 0.12 segundos (120 ms). Un QRS prolongado (>0.12s) sugiere alteración en la conducción intraventricular, como bloqueo de rama.',
        points: 1,
        maxPoints: 1
      },
      {
        questionId: 'q_ecg_2',
        question: '¿Cuáles de los siguientes hallazgos electrocardiográficos son criterios de hipertrofia ventricular izquierda según Sokolow-Lyon?',
        userAnswer: ['SV1 + RV5 o RV6 ≥ 35mm', 'RaVL ≥ 11mm'],
        correctAnswer: ['SV1 + RV5 o RV6 ≥ 35mm', 'RaVL ≥ 11mm'],
        isCorrect: true,
        explanation: 'Los criterios de Sokolow-Lyon para HVI incluyen: SV1 + RV5/V6 ≥35mm o RaVL ≥11mm. Las ondas Q patológicas sugieren infarto previo, no HVI.',
        points: 2,
        maxPoints: 2
      },
      {
        questionId: 'q_ecg_3',
        question: 'Paciente de 65 años acude a urgencias por dolor torácico de 2 horas de evolución. El ECG muestra elevación del ST en derivaciones II, III y aVF. ¿Cuál es el diagnóstico más probable y qué derivaciones deberían monitorizarse para detectar complicaciones?',
        userAnswer: ['IAMCEST inferior, monitorizar V7-V9'],
        correctAnswer: ['IAMCEST inferior, monitorizar V3R-V4R'],
        isCorrect: false,
        explanation: 'El patrón de elevación en II, III, aVF indica IAMCEST de cara inferior. Debe monitorizarse V3R-V4R para detectar extensión al ventrículo derecho, complicación frecuente en infartos inferiores.',
        points: 0,
        maxPoints: 3
      },
      {
        questionId: 'q_ecg_4',
        question: 'En la fibrilación auricular, la ausencia de ondas P y la irregularidad del ritmo ventricular son hallazgos diagnósticos patognomónicos.',
        userAnswer: ['Verdadero'],
        correctAnswer: ['Verdadero'],
        isCorrect: true,
        explanation: 'Correcto. La fibrilación auricular se caracteriza por la ausencia de ondas P (sustituidas por ondas f) y ritmo ventricular irregularmente irregular, siendo estos hallazgos patognomónicos.',
        points: 1,
        maxPoints: 1
      }
    ]
  }
];

// Mock Learning Analytics
export const mockLearningAnalytics = {
  userId: 'user_1',
  courseId: 'course_1',
  timeSpent: 127, // minutes
  completionRate: 75, // percentage
  averageQuizScore: 80,
  strugglingTopics: ['Síndrome Coronario Agudo', 'Arritmias Complejas'],
  strongTopics: ['ECG Básico', 'Hipertensión Arterial'],
  recommendedActions: [
    {
      type: 'review_content',
      title: 'Revisar contenido de SCA',
      description: 'Se recomienda revisar el módulo de síndrome coronario agudo, especialmente infartos de cara inferior',
      priority: 'high',
      resourceUrl: '/courses/course_1/modules/sca'
    },
    {
      type: 'practice_quiz',
      title: 'Practicar casos clínicos',
      description: 'Realizar más tests de práctica con casos clínicos de ECG',
      priority: 'medium',
      resourceUrl: '/quizzes/quiz_practice_ecg'
    }
  ],
  lastUpdated: new Date('2024-01-25')
};

// Case Study Mock Data
export const mockCaseStudy = {
  id: 'case_hta_complex',
  title: 'Caso Clínico: Hipertensión Resistente en Paciente Diabético',
  patientInfo: {
    age: 58,
    gender: 'M' as const,
    clinicalHistory: 'Varón de 58 años con antecedentes de DM2 de 10 años de evolución, HTA diagnosticada hace 5 años, dislipidemia y obesidad (IMC 32). Fumador de 20 cigarrillos/día durante 30 años, cesó hace 2 años.',
    symptoms: [
      'Cefalea occipital matutina',
      'Visión borrosa ocasional',
      'Disnea de moderados esfuerzos (NYHA II)',
      'Nicturia (2-3 veces/noche)'
    ]
  },
  diagnosticData: {
    ecg: 'Ritmo sinusal a 78 lpm, PR 0.18s, QRS 0.09s, criterios de HVI (Sokolow-Lyon+), strain pattern en V5-V6',
    echo: 'VI no dilatado, hipertrofia concéntrica moderada (grosor pared 14mm), FE 52%, E/e\' 15, insuficiencia aórtica leve',
    labs: {
      creatinina: 1.4,
      filtradoGlomerular: 52,
      HbA1c: 7.8,
      colesterolTotal: 198,
      LDL: 128,
      microalbuminuria: 85
    },
    imaging: [
      'Ecocardiograma: HVI concéntrica, disfunción diastólica grado II',
      'Fondo de ojo: retinopatía hipertensiva grado II',
      'MAPA 24h: promedio 24h 156/94 mmHg, patrón non-dipper'
    ]
  },
  questions: [
    {
      id: 'case_q1',
      question: 'Según la clasificación ESC/ESH, ¿en qué categoría de riesgo cardiovascular se encuentra este paciente?',
      type: 'multiple_choice' as const,
      options: [
        'Riesgo moderado',
        'Riesgo alto',
        'Riesgo muy alto',
        'Riesgo bajo'
      ],
      correctAnswer: ['Riesgo muy alto'],
      explanation: 'El paciente presenta riesgo cardiovascular muy alto por la combinación de: diabetes mellitus, lesión de órgano diana (HVI, microalbuminuria, retinopatía), disfunción renal (FG <60) y múltiples factores de riesgo.'
    },
    {
      id: 'case_q2',
      question: '¿Cuál sería el objetivo de presión arterial para este paciente y qué estrategia terapéutica inicial recomendaría?',
      type: 'open_text' as const,
      correctAnswer: ['PA objetivo <130/80 mmHg. Estrategia: Combinación triple (IECA/ARA2 + Diurético tiazídico + Antagonista del calcio) en dosis plenas, optimización del control glucémico, estatinas, antiagregación, modificaciones del estilo de vida'],
      explanation: 'En pacientes diabéticos con riesgo muy alto, el objetivo es <130/80 mmHg. La HTA resistente requiere triple terapia optimizada antes de considerar dispositivos o espironolactona.'
    }
  ],
  solution: {
    diagnosis: 'Hipertensión arterial resistente en paciente diabético con lesión de órgano diana múltiple',
    treatment: 'Triple terapia antihipertensiva (IECA + diurético + CCB), estatinas, metformina, modificaciones del estilo de vida, considerar espironolactona si persiste descontrol',
    explanation: 'Caso complejo que requiere manejo integral del riesgo cardiovascular con objetivos estrictos de control de PA, glucemia y lípidos.',
    learningPoints: [
      'Importancia de la estratificación del riesgo cardiovascular',
      'Concepto de hipertensión resistente y su manejo',
      'Papel de la lesión de órgano diana en la toma de decisiones',
      'Abordaje multifactorial del riesgo cardiovascular'
    ]
  }
};
