import styles from './LocationCityList.module.scss';

interface Props {
  city: string;
  children: React.ReactNode;
}
const LocationCityList: React.FC<Props> = ({ city, children }) => {
  return (
    <div className={styles.location_city_container}>
      <div className={styles.location_city_container__title}>
        <h2>{city}</h2>
      </div>
      <div className={styles.location_city_container__locations}>
        {children}
      </div>
    </div>
  );
};

export default LocationCityList;
