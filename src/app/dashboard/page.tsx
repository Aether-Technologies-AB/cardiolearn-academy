'use client';

import UserDashboard from '@/components/dashboard/UserDashboard';
import { mockUserProfile, mockUserProgress, mockUserCertifications, mockUserStats } from '@/data/mockCourses';

export default function DashboardPage() {
  return (
    <UserDashboard
      user={mockUserProfile}
      progress={mockUserProgress}
      certifications={mockUserCertifications}
      stats={mockUserStats}
    />
  );
}
