'use client';

import { useState } from 'react';
import { FunnelStep } from '@/lib/funnel-types';
import QuizStep from './steps/QuizStep';
import AppShowcaseStep from './steps/AppShowcaseStep';
import LockedRevealStep from './steps/LockedRevealStep';
import NotificationsStep from './steps/NotificationsStep';
import MessengerStep from './steps/MessengerStep';

export default function ConversionFunnel() {
  const [currentStep, setCurrentStep] = useState<FunnelStep>(1);
  const [quizAnswer, setQuizAnswer] = useState<string>('');
  const [completedSteps, setCompletedSteps] = useState<Set<FunnelStep>>(new Set());

  const handleStepComplete = (step: FunnelStep, nextData?: any) => {
    setCompletedSteps((prev) => new Set([...prev, step]));
    if (step === 1) {
      setQuizAnswer(nextData);
    }
    setCurrentStep((step + 1) as FunnelStep);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <QuizStep onComplete={handleStepComplete} />;
      case 2:
        return <AppShowcaseStep onComplete={handleStepComplete} />;
      case 3:
        return <LockedRevealStep onComplete={handleStepComplete} />;
      case 4:
        return <NotificationsStep onComplete={handleStepComplete} />;
      case 5:
        return <MessengerStep onComplete={handleStepComplete} />;
      default:
        return <QuizStep onComplete={handleStepComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderStep()}
    </div>
  );
}
