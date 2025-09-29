'use client';

import { useState } from 'react';
import QuizInterface from '@/components/evaluations/QuizInterface';
import QuizResults from '@/components/evaluations/QuizResults';
import { mockQuizzes, mockQuizAttempts } from '@/data/mockQuizzes';
import { notFound } from 'next/navigation';

interface QuizPageProps {
  params: {
    id: string;
  };
}

export default function QuizPage({ params }: QuizPageProps) {
  const [showResults, setShowResults] = useState(false);
  const [isPreview] = useState(params.id === 'preview');
  
  const quiz = mockQuizzes.find(q => q.id === params.id || (isPreview && q.id === 'quiz_ecg_basics'));
  
  if (!quiz) {
    notFound();
  }

  // Mock attempt data
  const attempt = mockQuizAttempts[0];
  
  const handleSubmit = (attemptData: any) => {
    console.log('Quiz submitted:', attemptData);
    setShowResults(true);
  };

  const handleExit = () => {
    window.history.back();
  };

  const handleRetake = () => {
    setShowResults(false);
  };

  const handleContinue = () => {
    alert('Continuando al siguiente módulo...');
  };

  const handleDownloadCertificate = () => {
    alert('Descargando certificado...');
  };

  if (showResults) {
    return (
      <QuizResults
        quiz={quiz}
        attempt={attempt}
        questionResults={attempt.detailedResults || []}
        onRetake={handleRetake}
        onContinue={handleContinue}
        onDownloadCertificate={handleDownloadCertificate}
      />
    );
  }

  return (
    <QuizInterface
      quiz={quiz}
      onSubmit={handleSubmit}
      onExit={handleExit}
      isPreview={isPreview}
    />
  );
}
