import Image, { StaticImageData } from 'next/image';
import BoldLink from '../../../links/boldLink/BoldLink';
import ReadMore from '../../../readMore/ReadMore';
import styles from './SocialMediaCard.module.scss';

export interface ISocialMediaCard {
  icon: string | StaticImageData;
  description: string;
  link: string;
  image: string | StaticImageData;
}

const SocialMediaCard: React.FC<ISocialMediaCard> = ({
  icon,
  description,
  link,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={image}
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <Image src={icon} alt="clock" className={styles.icon} />
          <ReadMore text={description} maxLength={100} showMoreText="..." />
          <BoldLink text="View Our Facebook" link={link} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
