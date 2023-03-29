import Image, { StaticImageData } from 'next/image';
import Clock from '../../../public/images/clock.png';
import Serve from '../../../public/images/serve.png';
import styles from './RecipesCard.module.scss';
export interface IRecipesCard {
  title: string;
  time: string;
  serve: string;
  image: string | StaticImageData;
}

const RecipesCard: React.FC<IRecipesCard> = ({ title, time, serve, image }) => {
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
          <h4>{title}</h4>
          <div className={styles.card__info}>
            <p>
              <Image src={Clock} alt="clock" className={styles.icon} />
              {time}
            </p>
            <p className={styles.last}>
              <Image src={Serve} alt="serve" className={styles.icon} />
              {serve}
            </p>
          </div>
          <a>View Recipe &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
