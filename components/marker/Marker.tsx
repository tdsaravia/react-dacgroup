import Image from 'next/image';
import Star from '../../public/images/Star.png';
import styles from './Marker.module.scss';

export interface IMarker {}

const Marker: React.FC<IMarker> = () => {
  return (
    <div className={styles.marker_container}>
      <Image
        src={Star}
        alt="star"
        className={styles.marker_container__star_icon}
      />
      <p>Make My Store</p>
    </div>
  );
};

export default Marker;
