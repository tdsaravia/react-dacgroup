import BoldLink from '../../links/boldLink/BoldLink';
import styles from './LocationMap.module.scss';

export interface ILocationMap {
  openText: string;
}

const LocationMap: React.FC<ILocationMap> = ({ openText }) => {
  return (
    <div className={styles.location_map__container}>
      <div className={styles.location_map__container__title}>
        <h1>{openText}</h1>
      </div>
      <div className={styles.location_map__container__googlemap}>mapa UwU</div>
      <div className={styles.location_map__container__link}>
        <BoldLink text="Get Directions" link="/" />
      </div>
    </div>
  );
};

export default LocationMap;
