import SocialMediaCard from './SocialMediaCard/SocialMediaCard';
import { mockSocialMediaCardProps } from './SocialMediaCard/SocialMediaCard.mocks';
import styles from './SocialMedias.module.scss';

const SocialMedias = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Connect With Us</h1>
      </div>
      <div className={styles.card__container}>
        <SocialMediaCard {...mockSocialMediaCardProps.base} />
        <SocialMediaCard {...mockSocialMediaCardProps.base} />
        <SocialMediaCard {...mockSocialMediaCardProps.base} />
        <SocialMediaCard {...mockSocialMediaCardProps.base} />
        <SocialMediaCard {...mockSocialMediaCardProps.base} />
        <SocialMediaCard {...mockSocialMediaCardProps.base} />
      </div>
    </div>
  );
};

export default SocialMedias;
