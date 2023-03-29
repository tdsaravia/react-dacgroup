import Store from '../../../public/images/cicispizza.png';
import { IContentRow } from './ContentRow';

const base: IContentRow = {
  title: 'About the fresh market',
  description:
    'At the Fresh Market, experience the charm of a European-style farmer’s market right in your neighborhood. Shop our locally grown produce and finest ingredients for delicious dinners. Take in the aroma of our signature roasted coffee and freshly cut flowers. With carefully curated offerings and our friendly team, when you visit the Fresh Market we’ll help you make every day eating extraordinary.',
  image: Store,
};

export const mockContentRowProps = {
  base,
};
