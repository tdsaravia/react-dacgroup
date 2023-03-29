import Image, { StaticImageData } from 'next/image';
import styles from './ContentRow.module.scss';
export interface IContentRow {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const ContentRow: React.FC<IContentRow> = ({ title, description, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.row}>
        <Image
          src={image}
          alt="store"
          width="500"
          height="350"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ContentRow;
