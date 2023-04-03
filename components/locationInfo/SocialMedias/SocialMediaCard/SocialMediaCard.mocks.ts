import FbLogo from '../../../../public/images/fb-logo.png';
import Womans from '../../../../public/images/two-womans.png';
import { ISocialMediaCard } from './SocialMediaCard';
const base: ISocialMediaCard = {
  description:
    'Kathy, a guest in our Pawley’s Island store, picked up one of our 40th Anniversary chocolate bars today and found a winner! These limited-edition, specially marked The Fresh Market Pretzel Chocolate Bars or Himalayan Sea Salt Dark Chocolate Bars are available while supplies last, and they’re going fast! ',
  link: 'view our facebook',
  image: Womans,
  icon: FbLogo,
  textLink: 'view our facebook',
};

export const mockSocialMediaCardProps = {
  base,
};
