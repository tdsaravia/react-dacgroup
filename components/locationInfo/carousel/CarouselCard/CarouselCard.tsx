import Image, { StaticImageData } from 'next/image';
import styles from './CarouselCard.module.scss';

export interface ICarouselCard {
  image: string | StaticImageData;
  title: string;
}

const CarouselCard: React.FC<ICarouselCard> = ({ image, title }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="image" width="300" height="300" />
      <h4>{title}</h4>
    </div>
  );
};

export default CarouselCard;
