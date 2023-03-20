import Image from 'next/image';
import styles from './FoodCard.module.css';

export interface IFoodCard {
  title: string;
  body: string;
}

const FoodCard: React.FC<IFoodCard> = ({ title, body }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="/pizza.jpeg"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
