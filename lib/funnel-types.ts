export type FunnelStep = 1 | 2 | 3 | 4 | 5;

export interface QuizAnswer {
  id: string;
  text: string;
}

export interface NotificationItem {
  id: string;
  name: string;
  handle: string;
  description: string;
  avatar: string;
  timestamp: string;
}

export interface UnfollowerCard {
  id: string;
  avatar: string;
  username: string;
  status: string;
  isLocked: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp?: string;
}
