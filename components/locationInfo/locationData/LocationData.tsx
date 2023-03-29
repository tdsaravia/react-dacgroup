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
          <a href="#">CURBSIDE PICKUP & DELIVERY</a>
          <a href="#">CURBSIDE PICKUP & DELIVERY</a>
          <a href="#">CURBSIDE PICKUP & DELIVERY</a>
          <button>shop now</button>
        </div>
      </div>
    </div>
  );
};

export default LocationData;
