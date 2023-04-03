import Image, { StaticImageData } from 'next/image';
import Button from '../../button/Button';
import styles from './DinnerCard.module.scss';
export interface IDinnerCard {
  availableDate: string;
  image: string | StaticImageData;
  price: number;
  title: string;
  description: string;
}

const DinnerCard: React.FC<IDinnerCard> = ({
  title,
  availableDate,
  image,
  price,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <div className={styles.header__title}>
            <p>{availableDate}</p>
          </div>
          <Image
            src={image}
            alt="card__image"
            className={styles.card__image}
            width="647"
            height="200"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.card__content}>
            <h4>{title}</h4>
            <h4>${price}</h4>
          </div>
          <div className={styles.card__content}>
            <p>{description}</p>
            <div className={styles.card__button}>
              <Button
                text="View Recipe"
                link="https://www.google.com"
                width={209}
                height={42}
              />
              <Button
                text="Buy Now"
                link="https://www.google.com"
                width={209}
                height={42}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinnerCard;
