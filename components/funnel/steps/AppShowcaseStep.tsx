'use client';

import { FunnelStep, UnfollowerCard } from '@/lib/funnel-types';

const unfollowers: UnfollowerCard[] = [
  {
    id: '1',
    avatar: 'S',
    username: '@sophia.r',
    status: 'Unfollowed you · 2m ago',
    isLocked: true,
  },
  {
    id: '2',
    avatar: 'M',
    username: '@marcus.j',
    status: "Doesn't follow back",
    isLocked: true,
  },
  {
    id: '3',
    avatar: 'E',
    username: '@_em.lee',
    status: 'Ghost follower',
    isLocked: true,
  },
];

interface AppShowcaseStepProps {
  onComplete: (step: FunnelStep) => void;
}

export default function AppShowcaseStep({ onComplete }: AppShowcaseStepProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8 bg-gradient-to-b from-slate-900 to-black">
      {/* Header */}
      <div className="w-full max-w-md text-center mt-8">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          See who unfollowed you. Instantly.
        </h2>
        <p className="text-xs text-gray-500">Real-time tracking · Ghost detection</p>
      </div>

      {/* Logo/Icon */}
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-8">
        <span className="text-3xl font-bold text-white">L</span>
      </div>

      {/* Unfollower Cards */}
      <div className="w-full max-w-md space-y-4 flex-1 flex flex-col justify-center">
        {unfollowers.map((unfollower) => (
          <div
            key={unfollower.id}
            className="relative group rounded-2xl p-4 bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                {unfollower.avatar}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white truncate">{unfollower.username}</p>
                <p className="text-sm text-gray-400">{unfollower.status}</p>
              </div>

              {/* Lock Icon */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L9 4H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3l-3-3z" />
                    <circle cx="12" cy="12" r="5.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onComplete(2)}
        className="w-full max-w-md py-4 px-6 rounded-full text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 mb-8"
      >
        Download Free on iPhone
      </button>

      {/* Footer */}
      <div className="text-gray-600 text-xs">Free · iOS only · No login required</div>
    </div>
  );
}
