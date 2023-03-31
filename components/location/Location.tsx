import Link from 'next/link';
import styles from './Location.module.scss';

export interface ILocation {
  link: string;
  locationName: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  phone: string;
}

const Location: React.FC<ILocation> = ({
  link,
  locationName,
  address,
  city,
  region,
  postalCode,
  phone,
}) => {
  return (
    <div className={styles.container}>
      <Link href={link} className={styles.container__link}>
        <p>{locationName}</p>
      </Link>
      <p>{address}</p>
      <p>
        {city}, {region}, {postalCode}
      </p>
      <p>{phone}</p>
    </div>
  );
};

export default Location;
