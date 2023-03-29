import styles from './BaseTemplate.module.scss';

export interface IStoreHours {
  sampleTextProp: string;
}

const StoreHours: React.FC<IStoreHours> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default StoreHours;
