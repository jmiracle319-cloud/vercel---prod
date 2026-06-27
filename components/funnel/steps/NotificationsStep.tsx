'use client';

import { FunnelStep, NotificationItem } from '@/lib/funnel-types';

const notifications: NotificationItem[] = [
  {
    id: '1',
    name: 'LURKE',
    handle: '@jess_marie unfollowed you',
    description: '',
    avatar: 'L',
    timestamp: 'now',
  },
  {
    id: '2',
    name: 'LURKE',
    handle: '3 ghost followers detected',
    description: '',
    avatar: 'L',
    timestamp: '5m',
  },
  {
    id: '3',
    name: 'LURKE',
    handle: '@_alexk doesn\'t follow back',
    description: '',
    avatar: 'L',
    timestamp: '12m',
  },
];

interface NotificationsStepProps {
  onComplete: (step: FunnelStep) => void;
}

export default function NotificationsStep({ onComplete }: NotificationsStepProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8 bg-gradient-to-b from-purple-950 via-black to-black">
      {/* Header */}
      <div className="text-center mt-8">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          JUST NOW
        </p>
        <h1 className="text-4xl font-black leading-tight text-balance mb-2">
          Someone just unfollowed you.
        </h1>
      </div>

      {/* Notifications */}
      <div className="w-full max-w-md flex-1 flex flex-col justify-center space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-2xl p-4 bg-gradient-to-r from-purple-900/30 to-purple-900/10 border border-purple-700/30 backdrop-blur-sm hover:border-purple-600/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                {notification.avatar}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="font-bold text-white">{notification.name}</p>
                <p className="text-gray-300 text-sm">{notification.handle}</p>
              </div>

              {/* Timestamp */}
              <div className="text-gray-400 text-sm font-medium whitespace-nowrap">
                {notification.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onComplete(4)}
        className="w-full max-w-md py-4 px-6 rounded-full text-black font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 mb-8"
      >
        Turn on Alerts
      </button>

      {/* Footer */}
      <div className="text-gray-600 text-xs">Get notified the second they leave</div>
    </div>
  );
}
