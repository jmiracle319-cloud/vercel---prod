'use client';

import { useState } from 'react';
import { FunnelStep, QuizAnswer } from '@/lib/funnel-types';

const answers: QuizAnswer[] = [
  { id: '1', text: 'Yes, daily' },
  { id: '2', text: 'A few times a week' },
  { id: '3', text: 'Rarely' },
];

interface QuizStepProps {
  onComplete: (step: FunnelStep, data?: any) => void;
}

export default function QuizStep({ onComplete }: QuizStepProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (answerId: string) => {
    setSelected(answerId);
    setTimeout(() => {
      onComplete(1, answerId);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-md mt-8">
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
            style={{ width: '33%' }}
          />
        </div>
        <p className="text-center text-cyan-400 font-medium text-sm mt-4 tracking-wider">
          QUESTION 2 OF 3
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-md">
        {/* Icon */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700/30 flex items-center justify-center mb-12">
          <div className="w-12 h-12 rounded-full border-4 border-cyan-400 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-cyan-400" />
          </div>
        </div>

        {/* Question */}
        <h1 className="text-4xl font-bold text-center mb-8 leading-tight text-balance">
          Are you active on Instagram?
        </h1>

        {/* Answer Buttons */}
        <div className="w-full space-y-4">
          {answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleSelect(answer.id)}
              className={`w-full py-4 px-6 rounded-3xl text-lg font-medium transition-all duration-300 ${
                selected === answer.id
                  ? 'bg-cyan-400 text-black scale-95'
                  : 'bg-gray-900/50 border border-gray-700/50 hover:border-gray-600 text-white hover:bg-gray-900'
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-600 text-sm">500K+ users · iOS only</div>
    </div>
  );
}
