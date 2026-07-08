'use client';

import { FunnelStep } from '@/lib/funnel-types';

interface LockedRevealStepProps {
  onComplete: (step: FunnelStep) => void;
}

export default function LockedRevealStep({ onComplete }: LockedRevealStepProps) {
  const lockedCards = [
    { id: '1', color: 'from-pink-500 to-rose-500' },
    { id: '2', color: 'from-pink-500 to-rose-500' },
    { id: '3', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8 bg-gradient-to-b from-purple-950 via-black to-black">
      {/* Tag */}
      <div className="mt-8 px-4 py-2 rounded-full border border-rose-500/50 text-rose-400 text-xs font-semibold tracking-widest">
        CAUGHT IN 4K
      </div>

      {/* Main Heading */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-md">
        <h1 className="text-5xl font-black text-center mb-4 leading-tight text-balance">
          3 people unfollowed you this week.
        </h1>
        <p className="text-gray-400 text-center text-sm">Tap below to see who.</p>

        {/* Locked Cards */}
        <div className="w-full space-y-4 mt-12">
          {lockedCards.map((card) => (
            <div
              key={card.id}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Blurred Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-40 blur-2xl group-hover:blur-3xl transition-all duration-300`} />

              {/* Card Content */}
              <div className="relative px-6 py-4 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-950/80 border border-gray-800/50 backdrop-blur-sm group-hover:border-gray-700/50 transition-all duration-300 flex items-center justify-between">
                {/* Username (Blurred) */}
                <div className="flex-1">
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-32 blur-sm" />
                </div>

                {/* Lock Icon */}
                <div className="flex-shrink-0 ml-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-yellow-400 cursor-pointer hover:bg-yellow-500/30 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10h12v8H7z" opacity="0.3" />
                      <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" opacity="0.5" />
                      <circle cx="12" cy="11" r="2.5" opacity="0.7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md mb-8">
        <button
          onClick={() => onComplete(3)}
          className="w-full py-4 px-6 rounded-full text-white font-bold text-lg bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-rose-500/50 mb-2"
        >
          Reveal Names
        </button>
        <p className="text-center text-xs text-gray-500">ios, us only</p>
        <p className="text-center text-xs text-gray-500">Open within 10 minutes to use it for free</p>
      </div>
    </div>
  );
}
