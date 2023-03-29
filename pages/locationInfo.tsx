import Image from 'next/image';
import Button from '../components/button/Button';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import ContentRow from '../components/locationInfo/contentRow/ContentRow';
import { mockContentRowProps } from '../components/locationInfo/contentRow/ContentRow.mocks';
import DinnerCard from '../components/locationInfo/dinnerCards/DinnerCard';
import { mockDinnerCardProps } from '../components/locationInfo/dinnerCards/DinnerCard.mocks';
import LocationData from '../components/locationInfo/locationData/LocationData';
import { mockLocationDataProps } from '../components/locationInfo/locationData/LocationData.mocks';
import RecipesCard from '../components/locationInfo/recipesCard/RecipesCard';
import { mockRecipesCardProps } from '../components/locationInfo/recipesCard/RecipesCard.mocks';
import SocialMedias from '../components/locationInfo/SocialMedias/SocialMedias';
import Logo from '../public/images/logo.png';
import Star from '../public/images/Star.png';
import styles from '../styles/LocationInfo.module.scss';
import { NextPageWithLayout } from './page';
const LocationInfo: NextPageWithLayout = () => {
  return (
    <section>
      <div className={styles.title}>
        <div className={styles.marker}>
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={40}
            className={styles.title__image}
          />
          <h2>THE FRESH MARKET ON BISCAYNE BLVD</h2>
        </div>
        <div className={styles.marker}>
          <Image src={Star} alt="star" className={styles.title__star_icon} />
          <p>Make My Store</p>
        </div>
      </div>
      <div className={styles.container__data}>
        <LocationData {...mockLocationDataProps.base} />
        <LocationData {...mockLocationDataProps.base} />
        <LocationData {...mockLocationDataProps.base} />
      </div>
      <div className={styles.carousel__container}>
        <h2>this is carousel content</h2>
      </div>
      <div className={styles.container__meals}>
        <h2>Little Big Meals</h2>
        <p>America&apos;s Most Loved Dinner</p>
        <div className={styles.container__cards}>
          <DinnerCard {...mockDinnerCardProps.base} />
          <DinnerCard {...mockDinnerCardProps.base} />
        </div>
      </div>
      <div className={styles.container__meals}>
        <h2>Little Big Meals</h2>
        <div className={styles.container__cards}>
          <RecipesCard {...mockRecipesCardProps.base} />
          <RecipesCard {...mockRecipesCardProps.base} />
          <RecipesCard {...mockRecipesCardProps.base} />
        </div>
        <div>
          <Button
            text="View Details"
            link="https://www.google.com"
            width={309}
            height={60}
          />
        </div>
      </div>
      <ContentRow {...mockContentRowProps.base} />
      <SocialMedias />
    </section>
  );
};

export default LocationInfo;

LocationInfo.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <NavBar />
      {page}
      <Footer copyrightText="The Fresh Market, Inc." />
    </PrimaryLayout>
  );
};
