'use client';

import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle, Check, X, ChevronLeft, ChevronRight, Flag, RotateCcw } from 'lucide-react';
import { Quiz, Question, QuizAttempt, UserAnswer, QuestionDifficulty } from '@/types/evaluation';

interface QuizInterfaceProps {
  quiz: Quiz;
  onSubmit?: (attempt: Partial<QuizAttempt>) => void;
  onExit?: () => void;
  isPreview?: boolean;
}

export default function QuizInterface({ quiz, onSubmit, onExit, isPreview = false }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [timeRemaining, setTimeRemaining] = useState(quiz.timeLimit ? quiz.timeLimit * 60 : null); // Convert to seconds
  const [startTime] = useState(new Date());
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [showWarning, setShowWarning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  // Timer effect
  useEffect(() => {
    if (!timeRemaining || isPreview) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev && prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev ? prev - 1 : null;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isPreview]);

  // Warning when time is running low
  useEffect(() => {
    if (timeRemaining && timeRemaining <= 300 && !showWarning) { // 5 minutes warning
      setShowWarning(true);
    }
  }, [timeRemaining, showWarning]);

  const handleAnswerChange = (questionId: string, selectedAnswers: string[]) => {
    const questionStartTime = Date.now();
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        selectedAnswers,
        isCorrect: false, // Will be calculated on backend
        points: 0, // Will be calculated on backend
        timeSpent: prev[questionId] ? prev[questionId].timeSpent : 0
      }
    }));
  };

  const handleQuestionNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (direction === 'next' && currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentQuestionIndex(questionIndex);
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleSubmit = async () => {
    if (isPreview) return;
    
    setIsSubmitting(true);
    
    const endTime = new Date();
    const timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000 / 60); // minutes

    const attempt: Partial<QuizAttempt> = {
      quizId: quiz.id,
      startedAt: startTime,
      completedAt: endTime,
      timeSpent,
      answers: Object.values(answers)
    };

    onSubmit?.(attempt);
  };

  const handleAutoSubmit = () => {
    if (!isPreview) {
      handleSubmit();
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-neutral-black">
      {/* Header */}
      <div className="bg-neutral-dark-grey border-b border-neutral-medium-grey sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold text-white">{quiz.title}</h1>
              {isPreview && (
                <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-medium">
                  Vista Previa
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Timer */}
              {timeRemaining && !isPreview && (
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  timeRemaining <= 300 
                    ? 'bg-primary-red/20 text-primary-red' 
                    : timeRemaining <= 900 
                    ? 'bg-accent-gold/20 text-accent-gold'
                    : 'bg-neutral-medium-grey text-neutral-light-grey'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-medium">{formatTime(timeRemaining)}</span>
                </div>
              )}
              
              {/* Progress */}
              <div className="flex items-center gap-2 text-neutral-light-grey">
                <span className="text-sm">Progreso:</span>
                <span className="font-medium text-white">{answeredCount}/{totalQuestions}</span>
              </div>
              
              {/* Exit Button */}
              <button
                onClick={onExit}
                className="btn-secondary px-4 py-2"
              >
                {isPreview ? 'Cerrar' : 'Salir'}
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-neutral-medium-grey rounded-full h-2">
              <div
                className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      {showWarning && timeRemaining && timeRemaining <= 300 && (
        <div className="bg-primary-red/10 border-y border-primary-red/30 py-3">
          <div className="container-custom">
            <div className="flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">
                ⚠️ Quedan menos de 5 minutos. El examen se enviará automáticamente cuando termine el tiempo.
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-dark-grey rounded-xl p-6 sticky top-32">
              <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
              
              {/* Question Grid */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {quiz.questions.map((question, index) => {
                  const isAnswered = answers[question.id];
                  const isFlagged = flaggedQuestions.has(question.id);
                  const isCurrent = index === currentQuestionIndex;
                  
                  return (
                    <button
                      key={question.id}
                      onClick={() => handleQuestionJump(index)}
                      className={`
                        w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 relative
                        ${isCurrent 
                          ? 'bg-primary-blue text-white ring-2 ring-primary-blue/50' 
                          : isAnswered
                          ? 'bg-primary-teal text-white'
                          : 'bg-neutral-medium-grey text-neutral-light-grey hover:bg-neutral-light-grey/20'
                        }
                      `}
                    >
                      {index + 1}
                      {isFlagged && (
                        <Flag className="w-3 h-3 text-accent-gold absolute -top-1 -right-1" fill="currentColor" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary-teal rounded"></div>
                  <span className="text-neutral-light-grey">Respondida</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-neutral-medium-grey rounded"></div>
                  <span className="text-neutral-light-grey">Sin responder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-accent-gold" />
                  <span className="text-neutral-light-grey">Marcada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-dark-grey rounded-xl p-8">
              {/* Question Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium">
                      Pregunta {currentQuestionIndex + 1} de {totalQuestions}
                    </span>
                    <span className="px-3 py-1 bg-neutral-medium-grey text-neutral-light-grey rounded-full text-sm">
                      {currentQuestion.points} punto{currentQuestion.points !== 1 ? 's' : ''}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentQuestion.difficulty === QuestionDifficulty.HARD || currentQuestion.difficulty === QuestionDifficulty.EXPERT
                        ? 'bg-primary-red/20 text-primary-red'
                        : 'bg-neutral-medium-grey text-neutral-light-grey'
                    }`}>
                      {getDifficultyLabel(currentQuestion.difficulty)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleFlag(currentQuestion.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    flaggedQuestions.has(currentQuestion.id)
                      ? 'bg-accent-gold/20 text-accent-gold'
                      : 'bg-neutral-medium-grey text-neutral-light-grey hover:text-accent-gold'
                  }`}
                >
                  <Flag className="w-5 h-5" />
                </button>
              </div>

              {/* Question Content */}
              <div className="mb-8">
                <h2 className="text-xl text-white mb-6 leading-relaxed">
                  {currentQuestion.content}
                </h2>
                
                {/* Question Image */}
                {currentQuestion.imageUrl && (
                  <div className="mb-6">
                    <img 
                      src={currentQuestion.imageUrl} 
                      alt="Imagen de la pregunta"
                      className="max-w-full h-auto rounded-lg border border-neutral-medium-grey"
                    />
                  </div>
                )}

                {/* Question Video */}
                {currentQuestion.videoUrl && (
                  <div className="mb-6">
                    <video 
                      src={currentQuestion.videoUrl}
                      controls
                      className="w-full rounded-lg border border-neutral-medium-grey"
                    >
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                )}
              </div>

              {/* Answer Options */}
              <QuestionAnswerInterface
                question={currentQuestion}
                selectedAnswers={answers[currentQuestion.id]?.selectedAnswers || []}
                onAnswerChange={(selected) => handleAnswerChange(currentQuestion.id, selected)}
                disabled={isPreview && !currentQuestion.explanation}
              />

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-neutral-medium-grey">
                <button
                  onClick={() => handleQuestionNavigation('prev')}
                  disabled={currentQuestionIndex === 0}
                  className="btn-secondary flex items-center gap-2 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
                
                <div className="flex items-center gap-4">
                  {currentQuestionIndex === totalQuestions - 1 && !isPreview ? (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary px-8 py-3 text-lg font-medium"
                    >
                      {isSubmitting ? 'Enviando...' : 'Finalizar Examen'}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleQuestionNavigation('next')}
                      disabled={currentQuestionIndex === totalQuestions - 1}
                      className="btn-primary flex items-center gap-2 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Siguiente
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface QuestionAnswerInterfaceProps {
  question: Question;
  selectedAnswers: string[];
  onAnswerChange: (selectedAnswers: string[]) => void;
  disabled?: boolean;
}

function QuestionAnswerInterface({ question, selectedAnswers, onAnswerChange, disabled }: QuestionAnswerInterfaceProps) {
  const handleOptionSelect = (optionId: string) => {
    if (disabled) return;
    
    if (question.type === 'multiple_choice' || question.type === 'true_false') {
      onAnswerChange([optionId]);
    } else if (question.type === 'multiple_select') {
      const newSelection = selectedAnswers.includes(optionId)
        ? selectedAnswers.filter(id => id !== optionId)
        : [...selectedAnswers, optionId];
      onAnswerChange(newSelection);
    }
  };

  const handleTextAnswer = (text: string) => {
    if (disabled) return;
    onAnswerChange([text]);
  };

  switch (question.type) {
    case 'multiple_choice':
    case 'true_false':
      return (
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <label
              key={option.id}
              className={`
                flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all duration-200
                ${selectedAnswers.includes(option.id)
                  ? 'border-primary-blue bg-primary-blue/10'
                  : 'border-neutral-medium-grey hover:border-neutral-light-grey hover:bg-neutral-medium-grey/30'
                }
                ${disabled ? 'cursor-not-allowed opacity-60' : ''}
              `}
            >
              <div className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5
                ${selectedAnswers.includes(option.id)
                  ? 'border-primary-blue bg-primary-blue'
                  : 'border-neutral-medium-grey'
                }
              `}>
                {selectedAnswers.includes(option.id) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <div className="flex-1">
                <span className="text-neutral-light-grey mr-2 font-medium">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-white">{option.text}</span>
              </div>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={selectedAnswers.includes(option.id)}
                onChange={() => handleOptionSelect(option.id)}
                className="hidden"
                disabled={disabled}
              />
            </label>
          ))}
        </div>
      );

    case 'multiple_select':
      return (
        <div className="space-y-3">
          <p className="text-neutral-light-grey text-sm mb-4">
            Selecciona todas las opciones correctas:
          </p>
          {question.options?.map((option, index) => (
            <label
              key={option.id}
              className={`
                flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all duration-200
                ${selectedAnswers.includes(option.id)
                  ? 'border-primary-blue bg-primary-blue/10'
                  : 'border-neutral-medium-grey hover:border-neutral-light-grey hover:bg-neutral-medium-grey/30'
                }
                ${disabled ? 'cursor-not-allowed opacity-60' : ''}
              `}
            >
              <div className={`
                w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5
                ${selectedAnswers.includes(option.id)
                  ? 'border-primary-blue bg-primary-blue'
                  : 'border-neutral-medium-grey'
                }
              `}>
                {selectedAnswers.includes(option.id) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              <div className="flex-1">
                <span className="text-neutral-light-grey mr-2 font-medium">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-white">{option.text}</span>
              </div>
              <input
                type="checkbox"
                value={option.id}
                checked={selectedAnswers.includes(option.id)}
                onChange={() => handleOptionSelect(option.id)}
                className="hidden"
                disabled={disabled}
              />
            </label>
          ))}
        </div>
      );

    case 'short_answer':
    case 'fill_blank':
      return (
        <div>
          <textarea
            value={selectedAnswers[0] || ''}
            onChange={(e) => handleTextAnswer(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            disabled={disabled}
            className="w-full p-4 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white placeholder-neutral-light-grey resize-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue disabled:opacity-60"
            rows={4}
          />
        </div>
      );

    case 'essay':
      return (
        <div>
          <textarea
            value={selectedAnswers[0] || ''}
            onChange={(e) => handleTextAnswer(e.target.value)}
            placeholder="Desarrolla tu respuesta de forma detallada..."
            disabled={disabled}
            className="w-full p-4 bg-neutral-medium-grey border border-neutral-light-grey rounded-lg text-white placeholder-neutral-light-grey resize-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue disabled:opacity-60"
            rows={8}
          />
        </div>
      );

    default:
      return (
        <div className="text-neutral-light-grey italic">
          Tipo de pregunta no soportado: {question.type}
        </div>
      );
  }
}

function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    'easy': 'Fácil',
    'medium': 'Intermedio',
    'hard': 'Difícil',
    'expert': 'Experto'
  };
  return labels[difficulty] || difficulty;
}
