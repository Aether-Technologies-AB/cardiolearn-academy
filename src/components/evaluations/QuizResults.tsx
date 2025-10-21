'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Trophy, RotateCcw, Download, Share2, TrendingUp } from 'lucide-react';
import { Quiz, QuizAttempt, QuestionResult } from '@/types/evaluation';

interface QuizResultsProps {
  quiz: Quiz;
  attempt: QuizAttempt;
  questionResults: QuestionResult[];
  onRetake?: () => void;
  onContinue?: () => void;
  onDownloadCertificate?: () => void;
}

export default function QuizResults({ quiz, attempt, questionResults, onRetake, onContinue, onDownloadCertificate }: QuizResultsProps) {
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  const correctAnswers = questionResults.filter(result => result.isCorrect).length;
  const totalQuestions = questionResults.length;
  const accuracyPercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isPassed = attempt.score >= quiz.passingScore;
  const canRetake = quiz.maxAttempts ? attempt.attemptNumber < quiz.maxAttempts : true;

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-primary-teal';
    if (score >= 70) return 'text-accent-gold';
    if (score >= 60) return 'text-orange-400';
    return 'text-red-400';
  };

  const getPerformanceMessage = (score: number, passed: boolean) => {
    if (passed) {
      if (score >= 95) return '¡Excelente! Dominio excepcional del tema';
      if (score >= 85) return '¡Muy bien! Buen dominio del contenido';
      if (score >= 75) return 'Aprobado. Conocimiento satisfactorio';
      return 'Aprobado por los pelos. Considera revisar el material';
    } else {
      return 'No aprobado. Te recomendamos revisar el material y volver a intentarlo';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-black">
      <div className="container-custom py-8">
        {/* Results Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
            isPassed ? 'bg-accent-teal/20' : 'bg-primary-red/20'
          }`}>
            {isPassed ? (
              <CheckCircle className="w-12 h-12 text-green-400" />
            ) : (
              <XCircle className="w-12 h-12 text-red-400" />
            )}
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            {isPassed ? '¡Felicidades!' : 'Intento No Aprobado'}
          </h1>
          
          <p className="text-xl text-neutral-light-grey mb-2">
            {quiz.title}
          </p>
          
          <p className={`text-lg font-medium ${getPerformanceColor(attempt.score)}`}>
            {getPerformanceMessage(attempt.score, isPassed)}
          </p>
        </div>

        {/* Score Summary */}
        <div className="bg-neutral-dark-grey rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className={`text-4xl font-bold mb-2 ${getPerformanceColor(attempt.score)}`}>
                {attempt.score.toFixed(1)}%
              </div>
              <div className="text-neutral-light-grey">Puntuación Final</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="text-neutral-light-grey">Respuestas Correctas</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {Math.floor(attempt.timeSpent / 60)}:{(attempt.timeSpent % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-neutral-light-grey">Tiempo Utilizado</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {attempt.attemptNumber}°
              </div>
              <div className="text-neutral-light-grey">Intento</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-neutral-light-grey">Precisión</span>
              <span className={`font-medium ${getPerformanceColor(accuracyPercentage)}`}>
                {accuracyPercentage}%
              </span>
            </div>
            <div className="w-full bg-neutral-medium-grey rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  accuracyPercentage >= 70 ? 'bg-green-400' : 
                  accuracyPercentage >= 50 ? 'bg-accent-gold' : 'bg-primary-red'
                }`}
                style={{ width: `${accuracyPercentage}%` }}
              />
            </div>
            
            {/* Passing Score Indicator */}
            <div className="relative mt-2">
              <div 
                className="absolute h-1 w-0.5 bg-primary-blue"
                style={{ left: `${quiz.passingScore}%` }}
              />
              <div 
                className="absolute -top-6 text-xs text-primary-blue transform -translate-x-1/2"
                style={{ left: `${quiz.passingScore}%` }}
              >
                Mínimo: {quiz.passingScore}%
              </div>
            </div>
          </div>
        </div>

        {/* Pass/Fail Status and Actions */}
        <div className={`rounded-xl p-6 mb-8 ${
          isPassed ? 'bg-accent-teal/10 border border-accent-teal/30' : 'bg-primary-red/10 border border-primary-red/30'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {isPassed ? (
                <>
                  <Trophy className="w-8 h-8 text-accent-gold" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-1">
                      ¡Evaluación Aprobada!
                    </h3>
                    <p className="text-neutral-light-grey">
                      Has superado el puntaje mínimo requerido de {quiz.passingScore}%
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-8 h-8 text-red-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-1">
                      Evaluación No Aprobada
                    </h3>
                    <p className="text-neutral-light-grey">
                      Necesitas {quiz.passingScore}% para aprobar. Obtuviste {attempt.score.toFixed(1)}%
                    </p>
                  </div>
                </>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {isPassed && onDownloadCertificate && (
                <button
                  onClick={onDownloadCertificate}
                  className="btn-primary flex items-center gap-2 px-6 py-3"
                >
                  <Download className="w-4 h-4" />
                  Descargar Certificado
                </button>
              )}
              
              {!isPassed && canRetake && onRetake && (
                <button
                  onClick={onRetake}
                  className="btn-secondary flex items-center gap-2 px-6 py-3"
                >
                  <RotateCcw className="w-4 h-4" />
                  Volver a Intentar
                </button>
              )}
              
              {isPassed && onContinue && (
                <button
                  onClick={onContinue}
                  className="btn-primary px-6 py-3"
                >
                  Continuar Curso
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Category Breakdown */}
          <div className="bg-neutral-dark-grey rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary-blue" />
              Análisis por Categoría
            </h3>
            
            <div className="space-y-4">
              {getCategoryAnalysis(questionResults).map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-light-grey">{category.name}</span>
                    <span className={`font-medium ${getPerformanceColor(category.percentage)}`}>
                      {category.correct}/{category.total} ({category.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-neutral-medium-grey rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        category.percentage >= 80 ? 'bg-green-400' : 
                        category.percentage >= 60 ? 'bg-accent-gold' : 'bg-primary-red'
                      }`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Analysis */}
          <div className="bg-neutral-dark-grey rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Análisis de Tiempo</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-light-grey">Tiempo total utilizado</span>
                <span className="text-white font-medium">
                  {Math.floor(attempt.timeSpent / 60)}:{(attempt.timeSpent % 60).toString().padStart(2, '0')}
                </span>
              </div>
              
              {quiz.timeLimit && (
                <div className="flex justify-between items-center">
                  <span className="text-neutral-light-grey">Tiempo límite</span>
                  <span className="text-white font-medium">
                    {quiz.timeLimit} minutos
                  </span>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-light-grey">Tiempo promedio por pregunta</span>
                <span className="text-white font-medium">
                  {Math.round(attempt.timeSpent / totalQuestions)} segundos
                </span>
              </div>
              
              {quiz.timeLimit && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-light-grey">Uso del tiempo</span>
                    <span className="text-white font-medium">
                      {Math.round((attempt.timeSpent / (quiz.timeLimit * 60)) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-medium-grey rounded-full h-2">
                    <div
                      className="bg-primary-blue h-2 rounded-full"
                      style={{ width: `${Math.min((attempt.timeSpent / (quiz.timeLimit * 60)) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Results Toggle */}
        <div className="bg-neutral-dark-grey rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Revisión Detallada</h3>
            <button
              onClick={() => setShowDetailedResults(!showDetailedResults)}
              className="btn-secondary px-4 py-2"
            >
              {showDetailedResults ? 'Ocultar Detalles' : 'Ver Detalles'}
            </button>
          </div>

          {showDetailedResults && (
            <div className="space-y-6">
              {questionResults.map((result, index) => (
                <QuestionResultItem
                  key={result.questionId}
                  result={result}
                  questionNumber={index + 1}
                  isSelected={selectedQuestionIndex === index}
                  onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => window.print()}
            className="btn-secondary flex items-center gap-2 px-6 py-3"
          >
            <Download className="w-4 h-4" />
            Imprimir Resultados
          </button>
          
          <button
            onClick={() => navigator.share?.({ title: 'Mis resultados del quiz', text: `Obtuve ${attempt.score}% en ${quiz.title}` })}
            className="btn-secondary flex items-center gap-2 px-6 py-3"
          >
            <Share2 className="w-4 h-4" />
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
}

interface QuestionResultItemProps {
  result: QuestionResult;
  questionNumber: number;
  isSelected: boolean;
  onClick: () => void;
}

function QuestionResultItem({ result, questionNumber, isSelected, onClick }: QuestionResultItemProps) {
  return (
    <div className="border border-neutral-medium-grey rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full p-4 text-left hover:bg-neutral-medium-grey/30 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              result.isCorrect ? 'bg-accent-teal/20' : 'bg-primary-red/20'
            }`}>
              {result.isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
            </div>
            <div>
              <h4 className="font-medium text-white">Pregunta {questionNumber}</h4>
              <p className="text-sm text-neutral-light-grey line-clamp-1">
                {result.question}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className={`font-medium ${result.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {result.points}/{result.maxPoints} pts
            </span>
            <div className={`transform transition-transform ${isSelected ? 'rotate-90' : ''}`}>
              →
            </div>
          </div>
        </div>
      </button>

      {isSelected && (
        <div className="border-t border-neutral-medium-grey p-6 bg-neutral-medium-grey/30">
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-white mb-2">Tu respuesta:</h5>
              <div className="flex flex-wrap gap-2">
                {result.userAnswer.map((answer, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      result.isCorrect ? 'bg-accent-teal/20 text-accent-teal' : 'bg-primary-red/20 text-primary-red'
                    }`}
                  >
                    {answer}
                  </span>
                ))}
              </div>
            </div>

            {!result.isCorrect && (
              <div>
                <h5 className="font-medium text-white mb-2">Respuesta correcta:</h5>
                <div className="flex flex-wrap gap-2">
                  {result.correctAnswer.map((answer, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-lg text-sm bg-accent-teal/20 text-accent-teal"
                    >
                      {answer}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h5 className="font-medium text-white mb-2">Explicación:</h5>
              <p className="text-neutral-light-grey leading-relaxed">
                {result.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getCategoryAnalysis(questionResults: QuestionResult[]) {
  // Mock category analysis - in real app, questions would have categories
  const categories = [
    { name: 'Fisiopatología', questions: questionResults.slice(0, Math.ceil(questionResults.length / 3)) },
    { name: 'Diagnóstico', questions: questionResults.slice(Math.ceil(questionResults.length / 3), Math.ceil(2 * questionResults.length / 3)) },
    { name: 'Tratamiento', questions: questionResults.slice(Math.ceil(2 * questionResults.length / 3)) }
  ];

  return categories.map(category => {
    const correct = category.questions.filter(q => q.isCorrect).length;
    const total = category.questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    return {
      name: category.name,
      correct,
      total,
      percentage
    };
  });
}
