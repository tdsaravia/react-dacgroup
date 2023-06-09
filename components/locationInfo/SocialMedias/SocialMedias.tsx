import styles from './SocialMedias.module.scss';
interface Props {
  children: React.ReactNode;
}

const SocialMedias: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Connect With Us</h1>
      </div>
      <div className={styles.card__container}>{children}</div>
    </div>
  );
};

export default SocialMedias;
