import Pizza from '../../../public/pizza.jpeg';
import { IDinnerCard } from './DinnerCard';

const base: IDinnerCard = {
  availableDate: 'Available from September 14th - September 20th',
  image: Pizza,
  title: 'Asian noodle Bowls',
  price: 25,
  description:
    'Why not try something a little different for dinner? This Asian-inspired meal is quick to cook and easy to love. Choose savory sirloin steak strips, shrimp or chicken breast strips and serve with fresh veggies over noodles. Enjoy!',
};

export const mockDinnerCardProps = {
  base,
};
