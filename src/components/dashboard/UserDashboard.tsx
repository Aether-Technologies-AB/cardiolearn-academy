'use client';

import React, { useState } from 'react';
import { User, BookOpen, Award, Settings, BarChart3, Clock, Star, Trophy } from 'lucide-react';
import { UserProfile, UserProgress, UserCertification, UserStats } from '@/types/user';

interface UserDashboardProps {
  user: UserProfile;
  progress: UserProgress[];
  certifications: UserCertification[];
  stats: UserStats;
}

export default function UserDashboard({ user, progress, certifications, stats }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'certificates' | 'preferences'>('overview');

  return (
    <div className="min-h-screen bg-neutral-black">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="bg-neutral-dark-grey rounded-xl p-6 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-2">
                ¡Bienvenido, {user.name}!
              </h1>
              <p className="text-neutral-light-grey mb-4">
                {user.specialty && `Especialidad: ${getSpecialtyName(user.specialty)}`}
                {user.institution && ` • ${user.institution}`}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">{stats.totalCoursesEnrolled}</div>
                  <div className="text-sm text-neutral-light-grey">Cursos Inscritos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-red">{stats.totalCoursesCompleted}</div>
                  <div className="text-sm text-neutral-light-grey">Cursos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-teal">{stats.totalStudyHours}h</div>
                  <div className="text-sm text-neutral-light-grey">Horas de Estudio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold">{stats.totalCertificates}</div>
                  <div className="text-sm text-neutral-light-grey">Certificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-neutral-dark-grey rounded-lg p-1 mb-8">
          <TabButton
            icon={<BarChart3 className="w-4 h-4" />}
            label="Resumen"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <TabButton
            icon={<BookOpen className="w-4 h-4" />}
            label="Mi Progreso"
            isActive={activeTab === 'progress'}
            onClick={() => setActiveTab('progress')}
          />
          <TabButton
            icon={<Award className="w-4 h-4" />}
            label="Certificados"
            isActive={activeTab === 'certificates'}
            onClick={() => setActiveTab('certificates')}
          />
          <TabButton
            icon={<Settings className="w-4 h-4" />}
            label="Preferencias"
            isActive={activeTab === 'preferences'}
            onClick={() => setActiveTab('preferences')}
          />
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && <OverviewTab progress={progress} stats={stats} />}
          {activeTab === 'progress' && <ProgressTab progress={progress} />}
          {activeTab === 'certificates' && <CertificatesTab certifications={certifications} />}
          {activeTab === 'preferences' && <PreferencesTab user={user} />}
        </div>
      </div>
    </div>
  );
}

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
        isActive
          ? 'bg-primary-blue text-white shadow-lg'
          : 'text-neutral-light-grey hover:text-white hover:bg-neutral-medium-grey'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function OverviewTab({ progress, stats }: { progress: UserProgress[]; stats: UserStats }) {
  const recentProgress = progress.slice(0, 3);
  const recentAchievements = stats.achievements.slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Current Progress */}
      <div className="bg-neutral-dark-grey rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-blue" />
          Progreso Reciente
        </h2>
        <div className="space-y-4">
          {recentProgress.map((course) => (
            <div key={course.courseId} className="border border-neutral-medium-grey rounded-lg p-4">
              <h3 className="font-medium text-white mb-2">{course.courseName}</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 bg-neutral-medium-grey rounded-full h-2">
                  <div
                    className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progressPercentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-neutral-light-grey">
                  {course.progressPercentage}%
                </span>
              </div>
              <div className="flex justify-between text-sm text-neutral-light-grey">
                <span>{course.completedHours}h / {course.totalHours}h</span>
                <span>Último acceso: {new Date(course.lastAccessedAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-neutral-dark-grey rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent-gold" />
          Logros Recientes
        </h2>
        <div className="space-y-4">
          {recentAchievements.map((achievement) => (
            <div key={achievement.id} className="flex items-start gap-3 p-3 bg-neutral-medium-grey rounded-lg">
              <div className="text-2xl">{achievement.icon}</div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{achievement.name}</h3>
                <p className="text-sm text-neutral-light-grey mb-1">{achievement.description}</p>
                <span className="text-xs text-neutral-light-grey">
                  {new Date(achievement.earnedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Stats */}
      <div className="bg-neutral-dark-grey rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-accent-teal" />
          Estadísticas de Estudio
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-neutral-light-grey">Racha actual</span>
            <span className="text-white font-medium">{stats.currentStreak} días</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-neutral-light-grey">Mejor racha</span>
            <span className="text-white font-medium">{stats.longestStreak} días</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-neutral-light-grey">Promedio de calificaciones</span>
            <span className="text-white font-medium">{stats.averageGrade.toFixed(1)}/10</span>
          </div>
          {stats.rank && (
            <div className="flex justify-between items-center py-2">
              <span className="text-neutral-light-grey">Ranking</span>
              <span className="text-accent-gold font-medium">#{stats.rank}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProgressTab({ progress }: { progress: UserProgress[] }) {
  return (
    <div className="bg-neutral-dark-grey rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Todos los Cursos</h2>
      <div className="space-y-4">
        {progress.map((course) => (
          <div key={course.courseId} className="border border-neutral-medium-grey rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{course.courseName}</h3>
                <div className="text-sm text-neutral-light-grey space-y-1">
                  <p>Iniciado: {new Date(course.startedAt).toLocaleDateString()}</p>
                  {course.completedAt && (
                    <p>Completado: {new Date(course.completedAt).toLocaleDateString()}</p>
                  )}
                  {course.currentModule && <p>Módulo actual: {course.currentModule}</p>}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-blue mb-1">
                  {course.progressPercentage}%
                </div>
                <div className="text-sm text-neutral-light-grey">
                  {course.completedHours}h / {course.totalHours}h
                </div>
              </div>
            </div>
            <div className="flex-1 bg-neutral-medium-grey rounded-full h-2 mb-4">
              <div
                className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-light-grey">
                Último acceso: {new Date(course.lastAccessedAt).toLocaleDateString()}
              </span>
              <button className="btn-primary text-sm px-4 py-2">
                Continuar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificatesTab({ certifications }: { certifications: UserCertification[] }) {
  return (
    <div className="bg-neutral-dark-grey rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Mis Certificados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="border border-neutral-medium-grey rounded-lg p-6 bg-gradient-to-br from-primary-blue/10 to-accent-teal/10">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-accent-gold" />
              <h3 className="text-lg font-medium text-white">{cert.courseName}</h3>
            </div>
            <div className="text-sm text-neutral-light-grey space-y-2 mb-4">
              <p>Fecha de emisión: {new Date(cert.issueDate).toLocaleDateString()}</p>
              {cert.grade && <p>Calificación: {cert.grade}/10</p>}
              <p>ID de credencial: {cert.credentialId}</p>
            </div>
            <button className="btn-secondary w-full">
              Descargar PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreferencesTab({ user }: { user: UserProfile }) {
  return (
    <div className="bg-neutral-dark-grey rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Preferencias de Usuario</h2>
      <div className="max-w-2xl space-y-6">
        {/* Profile Information */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Información Personal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-light-grey mb-2">Nombre</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full p-3 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-light-grey mb-2">Correo Electrónico</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full p-3 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Notificaciones</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-primary-blue" defaultChecked />
              <span className="text-neutral-light-grey">Recordatorios de estudio</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-primary-blue" defaultChecked />
              <span className="text-neutral-light-grey">Notificaciones por correo</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-primary-blue" />
              <span className="text-neutral-light-grey">Notificaciones push</span>
            </label>
          </div>
        </div>

        <button className="btn-primary">
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}

function getSpecialtyName(specialty: string): string {
  const specialties: Record<string, string> = {
    'clinical_general': 'Cardiología Clínica General',
    'interventional': 'Cardiología Intervencionista',
    'electrophysiology': 'Electrofisiología',
    'cardiovascular_imaging': 'Imagen Cardiovascular',
    'pediatric_congenital': 'Cardiología Pediátrica',
    'sports_rehabilitation': 'Cardiología del Deporte',
    'prevention_nutrition': 'Prevención y Nutrición',
    'research_advances': 'Investigación y Avances'
  };
  return specialties[specialty] || specialty;
}
