import { Crystal } from '../types/crystal';

export const crystals: Crystal[] = [
  {
    id: 'amethyst',
    name: 'Amethyst',
    description: 'A purple variety of quartz, known for its calming and protective properties.',
    properties: ['Protection', 'Purification', 'Divine Connection'],
    zodiacSigns: ['Virgo', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    effects: ['Enhances spiritual awareness', 'Calms the mind', 'Promotes better sleep'],
    image: '/images/crystals/amethyst.jpg'
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    description: 'The stone of universal love, promoting all forms of love including self-love.',
    properties: ['Love', 'Healing', 'Peace'],
    zodiacSigns: ['Taurus', 'Libra'],
    effects: ['Promotes self-love', 'Attracts romance', 'Heals emotional wounds'],
    image: '/images/crystals/rose-quartz.jpg'
  },
  {
    id: 'clear-quartz',
    name: 'Clear Quartz',
    description: 'The master healer crystal, known for its versatility and amplifying properties.',
    properties: ['Clarity', 'Amplification', 'Healing'],
    zodiacSigns: ['All'],
    effects: ['Enhances energy', 'Improves concentration', 'Amplifies intentions'],
    image: '/images/crystals/clear-quartz.jpg'
  }
]; 