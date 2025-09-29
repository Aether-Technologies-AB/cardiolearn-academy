'use client';

import CourseCatalog from '@/components/courses/CourseCatalog';
import { mockCourses } from '@/data/mockCourses';

export default function CoursesPage() {
  const handleEnroll = (courseId: string) => {
    console.log('Enrolling in course:', courseId);
    // In a real app, this would handle course enrollment
    alert(`¡Inscripción exitosa en el curso! ID: ${courseId}`);
  };

  return (
    <CourseCatalog 
      courses={mockCourses}
      onEnroll={handleEnroll}
    />
  );
}
