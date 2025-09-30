// CardioLearn Academy - Course and Learning Content Types
import { UserProgress } from './user';

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  instructor: Instructor;
  specialty: CardiologySpecialty;
  level: CourseLevel;
  duration: number; // total hours
  totalModules: number;
  totalLessons: number;
  price?: number;
  discountPrice?: number;
  language: 'es' | 'en';
  tags: string[];
  prerequisites: string[];
  learningObjectives: string[];
  certificationOffered: boolean;
  isLive: boolean;
  liveSchedule?: LiveSchedule[];
  modules: CourseModule[];
  resources: CourseResource[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  isPublished: boolean;
  enrollmentCount: number;
  averageRating: number;
  totalReviews: number;
}

export interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  duration: number; // hours
  lessons: Lesson[];
  isLocked: boolean;
  unlockConditions?: UnlockCondition[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description?: string;
  type: LessonType;
  content: LessonContent;
  duration: number; // minutes
  order: number;
  isCompleted?: boolean;
  lastWatched?: number; // video position in seconds
}

export enum LessonType {
  VIDEO = 'video',
  LIVE_CLASS = 'live_class',
  READING = 'reading',
  INTERACTIVE = 'interactive',
  CASE_STUDY = 'case_study',
  QUIZ = 'quiz',
  ASSIGNMENT = 'assignment'
}

export interface LessonContent {
  videoUrl?: string;
  videoThumbnail?: string;
  videoDuration?: number;
  readingContent?: string;
  interactiveContent?: Record<string, unknown>;
  caseStudyData?: CaseStudy;
  downloadableResources?: CourseResource[];
}

export interface CaseStudy {
  id: string;
  title: string;
  patientInfo: {
    age: number;
    gender: 'M' | 'F';
    clinicalHistory: string;
    symptoms: string[];
  };
  diagnosticData: {
    ecg?: string;
    echo?: string;
    labs?: Record<string, unknown>;
    imaging?: string[];
  };
  questions: CaseQuestion[];
  solution: CaseSolution;
}

export interface CaseQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'open_text' | 'image_annotation';
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
}

export interface CaseSolution {
  diagnosis: string;
  treatment: string;
  explanation: string;
  learningPoints: string[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  specialties: CardiologySpecialty[];
  institution: string;
  avatar: string;
  bio: string;
  credentials: string[];
  experience: string;
  coursesCount: number;
  studentsCount: number;
  rating: number;
}

export interface LiveSchedule {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  timezone: string;
  meetingUrl?: string;
  recordingUrl?: string;
  isRecorded: boolean;
}

export interface CourseResource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  size?: number; // bytes
  downloadable: boolean;
  description?: string;
}

export enum ResourceType {
  PDF = 'pdf',
  INFOGRAPHIC = 'infographic',
  PRESENTATION = 'presentation',
  CHECKLIST = 'checklist',
  GUIDELINE = 'guideline',
  REFERENCE = 'reference',
  TEMPLATE = 'template'
}

export enum CourseLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export enum CardiologySpecialty {
  CLINICAL_GENERAL = 'clinical_general',
  INTERVENTIONAL = 'interventional',
  ELECTROPHYSIOLOGY = 'electrophysiology',
  CARDIOVASCULAR_IMAGING = 'cardiovascular_imaging',
  PEDIATRIC_CONGENITAL = 'pediatric_congenital',
  SPORTS_REHABILITATION = 'sports_rehabilitation',
  PREVENTION_NUTRITION = 'prevention_nutrition',
  RESEARCH_ADVANCES = 'research_advances'
}

export interface UnlockCondition {
  type: 'completion' | 'quiz_pass' | 'time_based';
  targetId?: string; // lesson/module ID
  requiredScore?: number;
  waitTime?: number; // hours
}

export interface CourseEnrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  completedAt?: Date;
  progress: UserProgress;
  currentModule?: string;
  currentLesson?: string;
  certificateIssued?: boolean;
  finalGrade?: number;
}
