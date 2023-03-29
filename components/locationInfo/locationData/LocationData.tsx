import BoldLink from '../../links/boldLink/BoldLink';
import styles from './LocationData.module.scss';
export interface ILocationData {
  address: string;
  region: string;
  storeManager: string;
  phone: string;
}

const LocationData: React.FC<ILocationData> = ({
  address,
  region,
  storeManager,
  phone,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__body}>
          <p>
            {address}, {region}
          </p>
          <span>Store Manager</span>
          <p>{storeManager}</p>
          <span>Contact</span>
          <p>{phone}</p>
          <BoldLink text="Curbside pickup & Delivery" link="/" />
          <BoldLink text="Join the ultimate loyalty experience" link="/" />
          <BoldLink text="Order Platters & Catering" link="/" />
          <button>shop now</button>
        </div>
      </div>
    </div>
  );
};

export default LocationData;
