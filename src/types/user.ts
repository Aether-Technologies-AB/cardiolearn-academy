// CardioLearn Academy - User Types and Interfaces

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  specialty?: CardiologySpecialty;
  institution?: string;
  country?: string;
  professionalLevel?: ProfessionalLevel;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  courseName: string;
  progressPercentage: number;
  totalHours: number;
  completedHours: number;
  lastAccessedAt: Date;
  startedAt: Date;
  completedAt?: Date;
  currentModule?: string;
  currentLesson?: string;
}

export interface UserCertification {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  certificateUrl: string;
  issueDate: Date;
  expiryDate?: Date;
  grade?: number;
  credentialId: string;
}

export interface UserPreferences {
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  studyReminders: boolean;
  reminderTime?: string; // "09:00"
  interests: CardiologySpecialty[];
  preferredLanguage: 'es' | 'en';
  timezone?: string;
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

export enum ProfessionalLevel {
  STUDENT = 'student',
  RESIDENT = 'resident',
  FELLOW = 'fellow',
  ATTENDING = 'attending',
  SENIOR_CONSULTANT = 'senior_consultant',
  RESEARCHER = 'researcher'
}

export interface UserStats {
  userId: string;
  totalCoursesEnrolled: number;
  totalCoursesCompleted: number;
  totalStudyHours: number;
  totalCertificates: number;
  currentStreak: number; // days
  longestStreak: number;
  averageGrade: number;
  rank?: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  earnedAt: Date;
}

export enum AchievementCategory {
  COMPLETION = 'completion',
  PERFORMANCE = 'performance',
  CONSISTENCY = 'consistency',
  SPECIALTY = 'specialty',
  ENGAGEMENT = 'engagement'
}
