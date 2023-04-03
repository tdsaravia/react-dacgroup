import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import styles from './Title.module.scss';

export interface ITitle {
  title: string;
  place: string;
  color: string;
}

const Title: React.FC<ITitle> = ({ title, place, color = '#101820' }) => {
  if (color == 'green') {
    color = '#2A8738';
  } else {
    color = '#101820';
  }
  return (
    <div className={styles.container}>
      <Image
        src={Logo}
        alt="logo"
        width={400}
        height={400}
        className={styles.logo}
      />
      <h1 className={styles.title} style={{ color }}>
        {title} {place}
      </h1>
    </div>
  );
};

export default Title;
