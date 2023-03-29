import styles from './storeHours.module.scss';

export interface IStoreHours {
  date: string;
  startHour: string;
  endHour: string;
}

const StoreHours: React.FC<IStoreHours> = ({ date, startHour, endHour }) => {
  const dateArray = new Array(7).fill(null);

  return (
    <div className={styles.store_hours__container}>
      <div className={styles.title}>
        <p>Store Hours</p>
      </div>
      <div className={styles.date__container}>
        {dateArray.map((_, index) => (
          <div key={index} className={styles.date__content}>
            <p>{date}</p>
            <p>
              {startHour} to {endHour}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.amenities__container}>
        <h1>Amenities</h1>
        <p>In-Store Shopping Curbside Pick-up Catering</p>
      </div>
    </div>
  );
};

export default StoreHours;
