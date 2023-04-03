import Pizza from '../../../public/pizza.jpeg';
import { IRecipesCard } from './RecipesCard';
const base: IRecipesCard = {
  title: 'CHILI LIME JACKFRUIT TACOS',
  time: '30 minutes',
  serve: 'Serves 3-4',
  image: Pizza,
  link: 'https://www.google.com',
};

export const mockRecipesCardProps = {
  base,
};
