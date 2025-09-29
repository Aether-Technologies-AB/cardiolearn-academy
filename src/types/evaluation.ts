// CardioLearn Academy - Evaluation and Assessment Types

export interface Quiz {
  id: string;
  courseId: string;
  moduleId?: string;
  lessonId?: string;
  title: string;
  description?: string;
  type: QuizType;
  timeLimit?: number; // minutes
  totalQuestions: number;
  passingScore: number; // percentage
  maxAttempts?: number;
  questions: Question[];
  isRandomized: boolean;
  showResults: 'immediate' | 'after_completion' | 'after_deadline';
  createdAt: Date;
  updatedAt: Date;
}

export enum QuizType {
  MODULE_QUIZ = 'module_quiz',
  FINAL_EXAM = 'final_exam',
  PRACTICE_TEST = 'practice_test',
  CASE_BASED = 'case_based',
  COMPETENCY_ASSESSMENT = 'competency_assessment'
}

export interface Question {
  id: string;
  quizId: string;
  type: QuestionType;
  content: string;
  options?: QuestionOption[];
  correctAnswers: string[];
  explanation: string;
  difficulty: QuestionDifficulty;
  points: number;
  category?: string;
  imageUrl?: string;
  videoUrl?: string;
  references?: string[];
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  MULTIPLE_SELECT = 'multiple_select',
  TRUE_FALSE = 'true_false',
  FILL_BLANK = 'fill_blank',
  SHORT_ANSWER = 'short_answer',
  ESSAY = 'essay',
  DRAG_DROP = 'drag_drop',
  IMAGE_HOTSPOT = 'image_hotspot',
  CASE_ANALYSIS = 'case_analysis'
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export enum QuestionDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  EXPERT = 'expert'
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  attemptNumber: number;
  startedAt: Date;
  completedAt?: Date;
  timeSpent: number; // minutes
  answers: UserAnswer[];
  score: number; // percentage
  passed: boolean;
  feedback?: string;
  detailedResults?: QuestionResult[];
}

export interface UserAnswer {
  questionId: string;
  selectedAnswers: string[];
  isCorrect: boolean;
  points: number;
  timeSpent: number; // seconds
}

export interface QuestionResult {
  questionId: string;
  question: string;
  userAnswer: string[];
  correctAnswer: string[];
  isCorrect: boolean;
  explanation: string;
  points: number;
  maxPoints: number;
}

export interface Assessment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  type: AssessmentType;
  dueDate?: Date;
  instructions: string;
  rubric?: AssessmentRubric;
  maxScore: number;
  submissionFormat: SubmissionFormat[];
  isGroupWork: boolean;
  peerReview: boolean;
  createdAt: Date;
}

export enum AssessmentType {
  ASSIGNMENT = 'assignment',
  PROJECT = 'project',
  CASE_REPORT = 'case_report',
  RESEARCH_PAPER = 'research_paper',
  PRESENTATION = 'presentation',
  CLINICAL_SIMULATION = 'clinical_simulation'
}

export enum SubmissionFormat {
  TEXT = 'text',
  PDF = 'pdf',
  VIDEO = 'video',
  PRESENTATION = 'presentation',
  PORTFOLIO = 'portfolio'
}

export interface AssessmentRubric {
  id: string;
  criteria: RubricCriterion[];
  scoreScale: ScoreScale;
}

export interface RubricCriterion {
  id: string;
  name: string;
  description: string;
  weight: number; // percentage
  levels: CriterionLevel[];
}

export interface CriterionLevel {
  id: string;
  name: string; // e.g., "Excellent", "Good", "Fair", "Poor"
  description: string;
  points: number;
}

export enum ScoreScale {
  POINTS_100 = 'points_100',
  POINTS_10 = 'points_10',
  LETTER_GRADE = 'letter_grade',
  PASS_FAIL = 'pass_fail'
}

export interface Submission {
  id: string;
  assessmentId: string;
  userId: string;
  content: SubmissionContent;
  submittedAt: Date;
  status: SubmissionStatus;
  grade?: Grade;
  feedback?: Feedback[];
  peerReviews?: PeerReview[];
}

export interface SubmissionContent {
  text?: string;
  files?: FileUpload[];
  urls?: string[];
}

export interface FileUpload {
  id: string;
  filename: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

export enum SubmissionStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  GRADED = 'graded',
  RETURNED = 'returned'
}

export interface Grade {
  score: number;
  maxScore: number;
  percentage: number;
  letterGrade?: string;
  passed: boolean;
  gradedAt: Date;
  gradedBy: string;
  rubricScores?: RubricScore[];
}

export interface RubricScore {
  criterionId: string;
  levelId: string;
  points: number;
  feedback?: string;
}

export interface Feedback {
  id: string;
  type: FeedbackType;
  content: string;
  createdBy: string;
  createdAt: Date;
  isPublic: boolean;
}

export enum FeedbackType {
  INSTRUCTOR = 'instructor',
  PEER = 'peer',
  SELF = 'self',
  AUTOMATED = 'automated'
}

export interface PeerReview {
  id: string;
  reviewerId: string;
  submissionId: string;
  score?: number;
  comments: string;
  completedAt: Date;
  isAnonymous: boolean;
}

export interface LearningAnalytics {
  userId: string;
  courseId: string;
  moduleId?: string;
  timeSpent: number; // minutes
  completionRate: number;
  averageQuizScore: number;
  strugglingTopics: string[];
  strongTopics: string[];
  recommendedActions: RecommendedAction[];
  lastUpdated: Date;
}

export interface RecommendedAction {
  type: ActionType;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  resourceUrl?: string;
}

export enum ActionType {
  REVIEW_CONTENT = 'review_content',
  PRACTICE_QUIZ = 'practice_quiz',
  SEEK_HELP = 'seek_help',
  TAKE_BREAK = 'take_break',
  ADVANCE_CONTENT = 'advance_content'
}
