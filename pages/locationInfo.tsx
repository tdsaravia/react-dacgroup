import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Button from '../components/button/Button';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SocialMedias from '../components/locationInfo/SocialMedias/SocialMedias';
import ContentRow from '../components/locationInfo/contentRow/ContentRow';
import { mockContentRowProps } from '../components/locationInfo/contentRow/ContentRow.mocks';
import DinnerCard from '../components/locationInfo/dinnerCards/DinnerCard';
import { mockDinnerCardProps } from '../components/locationInfo/dinnerCards/DinnerCard.mocks';
import LocationData from '../components/locationInfo/locationData/LocationData';
import { mockLocationDataProps } from '../components/locationInfo/locationData/LocationData.mocks';
import LocationMap from '../components/locationInfo/locationMap/LocationMap';
import { mockLocationMapProps } from '../components/locationInfo/locationMap/LocationMap.mocks';
import NearbyLocations from '../components/locationInfo/nearbyLocations/NearbyLocations';
import RecipesCard from '../components/locationInfo/recipesCard/RecipesCard';
import { mockRecipesCardProps } from '../components/locationInfo/recipesCard/RecipesCard.mocks';
import StoreHours from '../components/locationInfo/storeHours/storeHours';
import { mockStoreHoursProps } from '../components/locationInfo/storeHours/storeHours.mocks';
import Marker from '../components/marker/Marker';
import Title from '../components/title/Title';
import styles from '../styles/LocationInfo.module.scss';
import { NextPageWithLayout } from './page';
const LocationInfo: NextPageWithLayout = () => {
  return (
    <section>
      <div className={styles.title}>
        <Title
          title="The fresh market on"
          place="Biscayne blvd"
          color="green"
        />
        <Marker />
      </div>
      <div className={styles.container__data}>
        <LocationData {...mockLocationDataProps.base} />
        <StoreHours {...mockStoreHoursProps.base} />
        <LocationMap {...mockLocationMapProps.base} />
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
      <NearbyLocations />
    </section>
  );
};

export default LocationInfo;

LocationInfo.getLayout = (page) => {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Location Info', path: '/locationInfo' },
  ];
  return (
    <PrimaryLayout>
      <NavBar />
      <Breadcrumb crumbs={crumbs} />
      {page}
      <Footer copyrightText="The Fresh Market, Inc." />
    </PrimaryLayout>
  );
};
