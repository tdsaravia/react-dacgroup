import Pizza from '../../../public/pizza.jpeg';
import { IRecipesCard } from './RecipesCard';
const base: IRecipesCard = {
  title: 'CHILI LIME JACKFRUIT TACOS',
  time: '30 minutes',
  serve: 'Serves 3-4',
  image: Pizza,
};

export const mockRecipesCardProps = {
  base,
};
