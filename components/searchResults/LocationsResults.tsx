import LocationStateList from '../locationStateList/LocationStateList';
import styles from './LocationsResults.module.scss';
import LocationResult from './locationResult/LocationResult';
import { mockLocationResultProps } from './locationResult/LocationResult.mocks';
import ScrollBox from './scrollBox/ScrollBox';
const LocationsResults: React.FC = () => {
  const dateArray = new Array(5).fill(null);

  return (
    <div className={styles.container}>
      <div className={styles.container__results}>
        <div className={styles.row}>
          <ScrollBox height="672px">
            {dateArray.map((_, index) => (
              <LocationResult key={index} {...mockLocationResultProps.base} />
            ))}
          </ScrollBox>
        </div>
        <div className={styles.row}>
          <div className={styles.map}>google map here</div>
        </div>
      </div>
      <LocationStateList />
    </div>
  );
};

export default LocationsResults;
