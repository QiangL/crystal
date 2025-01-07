export interface Crystal {
  id: string;
  name: string;
  description: string;
  properties: string[];
  zodiacSigns: string[];
  effects: string[];
  image: string;
}

export type Mood = 'happy' | 'sad' | 'anxious' | 'peaceful' | 'energetic' | 'tired';

export type Intention = 
  | 'love' 
  | 'career' 
  | 'health' 
  | 'wisdom' 
  | 'protection' 
  | 'abundance' 
  | 'spirituality' 
  | 'creativity';

export type ZodiacSign = 
  | 'Aries' 
  | 'Taurus' 
  | 'Gemini' 
  | 'Cancer' 
  | 'Leo' 
  | 'Virgo' 
  | 'Libra' 
  | 'Scorpio' 
  | 'Sagittarius' 
  | 'Capricorn' 
  | 'Aquarius' 
  | 'Pisces'; 