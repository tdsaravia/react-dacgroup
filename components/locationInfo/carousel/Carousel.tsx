import styles from './Carousel.module.scss';
interface Props {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Carousel</h1>
      </div>
      <div className={styles.card__container}>{children}</div>
    </div>
  );
};

export default Carousel;
