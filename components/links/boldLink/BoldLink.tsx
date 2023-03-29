import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../../../public/images/right-arrow.svg';
import styles from './BoldLink.module.scss';
export interface IBoldLink {
  text: string;
  link: string;
}

const BoldLink: React.FC<IBoldLink> = ({ text, link }) => {
  return (
    <Link href={link} className={styles.link}>
      <p>{text}</p>
      <Image
        src={Arrow}
        alt="right-arrow"
        width={6}
        height={12}
        className={styles.link__arrow}
      />
    </Link>
  );
};

export default BoldLink;
