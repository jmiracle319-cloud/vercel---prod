'use client';

import { FunnelStep, ChatMessage } from '@/lib/funnel-types';

const messages: ChatMessage[] = [
  {
    id: '1',
    text: 'hey 👀 noticed you lost 7 followers this week',
    isBot: true,
  },
  {
    id: '2',
    text: 'want me to show you who?',
    isBot: true,
  },
  {
    id: '3',
    text: 'yes show me',
    isBot: false,
  },
  {
    id: '4',
    text: 'also you have 312 ghost followers killing your reach 👻',
    isBot: true,
  },
  {
    id: '5',
    text: "install the app and i'll show you everything",
    isBot: true,
  },
];

interface MessengerStepProps {
  onComplete: (step: FunnelStep) => void;
}

export default function MessengerStep({ onComplete }: MessengerStepProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-8 bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Header with Status */}
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-8">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-pink-500 border-2 border-red-400/50 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
            L
          </div>

          {/* Name and Status */}
          <div>
            <p className="font-bold text-white">lurke.app</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-sm text-green-400 font-medium">Active now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="w-full max-w-md flex-1 flex flex-col justify-center space-y-4 py-8">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl ${
                message.isBot
                  ? 'bg-gray-800/80 text-white rounded-bl-none'
                  : 'bg-pink-500/80 text-white rounded-br-none'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center flex-shrink-0" />
          <div className="flex items-center gap-1 px-3 py-2 bg-gray-800/50 rounded-2xl rounded-bl-none">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full max-w-md mb-8 space-y-3">
        <a
          href="https://trksy.org/aff_c?offer_id=4590&aff_id=171988"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onComplete(5)}
          className="block w-full py-4 px-6 rounded-full text-white font-bold text-lg bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-400 hover:via-red-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 text-center"
        >
          Download Now
        </a>
        <p className="text-center text-sm text-gray-400">Open within 10 minutes to use it for free</p>
      </div>

      {/* Footer */}
      <div className="text-gray-600 text-xs">iOS only · US only</div>
    </div>
  );
}
