export interface User {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'teacher' | 'parent';
  department?: 'IT' | 'CSC' | 'EEE' | 'ECE' | 'MECH';
  avatar?: string;
  description?: string;
  contact?: string;
  class?: string;
  hasRepBadge?: boolean;
  ranking?: number;
  likes?: number;
  sportsAchievements?: SportAchievement[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  department?: string;
  organizer: string;
  type: 'academic' | 'sports' | 'cultural';
  venue?: string;
  participants?: string[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}

export interface SportAchievement {
  id: string;
  sport: string;
  position: number;
  competition: string;
  date: string;
  level: 'intramural' | 'district' | 'state' | 'national';
  medal?: 'gold' | 'silver' | 'bronze';
}

export interface Game {
  id: string;
  sport: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  date: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  highlights?: string[];
}