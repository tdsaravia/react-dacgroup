import Image from 'next/image';
import Icon from '../../../public/images/LocationIcon.svg';
import Button from '../../button/Button';
import BoldLink from '../../links/boldLink/BoldLink';
import Marker from '../../marker/Marker';
import styles from './LocationResult.module.scss';

export interface ILocationResult {
  link: string;
  locationName: string;
  address: string;
  city: string;
  region: string;
  phone: string;
  miles: string;
  open: string;
}

const LocationResult: React.FC<ILocationResult> = ({
  link,
  locationName,
  address,
  region,
  phone,
  miles,
  open,
  city,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Image src={Icon} alt="icon" />
          <h2>{locationName}</h2>
        </div>
        <div>
          <Marker />
          <p>{miles}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          {address} {city}, {region}
        </p>
        <p>{phone}</p>
        <p>{open}</p>
        <BoldLink text="Join the ultimate loyalty experience" link="/" />
        <BoldLink text="Get directions" link="/" />
        <Button text="Shop Now" link={link} width={300} height={60} />
      </div>
    </div>
  );
};

export default LocationResult;
