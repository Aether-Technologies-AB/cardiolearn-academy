import CourseDetail from '@/components/courses/CourseDetail';
import { mockCourses, mockUserProgress } from '@/data/mockCourses';
import { notFound } from 'next/navigation';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = mockCourses.find(c => c.id === params.id);
  
  if (!course) {
    notFound();
  }

  // Check if user is enrolled (mock logic)
  const userProgress = mockUserProgress.find(p => p.courseId === course.id);
  const isEnrolled = !!userProgress;

  const handleEnroll = () => {
    alert(`¡Inscripción exitosa en ${course.title}!`);
  };

  const handleStartLesson = (lessonId: string) => {
    alert(`Iniciando lección: ${lessonId}`);
  };

  return (
    <CourseDetail
      course={course}
      isEnrolled={isEnrolled}
      userProgress={userProgress ? {
        completedLessons: ['lesson_1_1', 'lesson_1_2'], // Mock completed lessons
        currentLesson: 'lesson_1_3',
        progressPercentage: userProgress.progressPercentage
      } : undefined}
      onEnroll={handleEnroll}
      onStartLesson={handleStartLesson}
    />
  );
}
