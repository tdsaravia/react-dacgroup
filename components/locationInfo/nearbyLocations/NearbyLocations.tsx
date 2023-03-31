import Button from '../../button/Button';
import Location from '../../location/Location';
import { mockLocationProps } from '../../location/Location.mocks';
import styles from './NearbyLocations.module.scss';
const NearbyLocations: React.FC = () => {
  return (
    <div className={styles.nearby_locations_container}>
      <div className={styles.nearby_locations_container__title}>
        <h1>Nearby Locations</h1>
      </div>
      <div className={styles.locations_container__locations}>
        <Location {...mockLocationProps.base} />
      </div>
      <div>
        <Button
          text="View All Stores"
          link="https://www.google.com"
          width={309}
          height={60}
        />{' '}
      </div>
    </div>
  );
};

export default NearbyLocations;
