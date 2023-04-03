import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Button from '../components/button/Button';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SocialMediaCard from '../components/locationInfo/SocialMedias/SocialMediaCard/SocialMediaCard';
import SocialMedias from '../components/locationInfo/SocialMedias/SocialMedias';
import Carousel from '../components/locationInfo/carousel/Carousel';
import CarouselCard from '../components/locationInfo/carousel/CarouselCard/CarouselCard';
import ContentRow from '../components/locationInfo/contentRow/ContentRow';
import DinnerCard from '../components/locationInfo/dinnerCards/DinnerCard';
import LocationData from '../components/locationInfo/locationData/LocationData';
import { mockLocationDataProps } from '../components/locationInfo/locationData/LocationData.mocks';
import LocationMap from '../components/locationInfo/locationMap/LocationMap';
import { mockLocationMapProps } from '../components/locationInfo/locationMap/LocationMap.mocks';
import NearbyLocations from '../components/locationInfo/nearbyLocations/NearbyLocations';
import RecipesCard from '../components/locationInfo/recipesCard/RecipesCard';
import StoreHours from '../components/locationInfo/storeHours/storeHours';
import { mockStoreHoursProps } from '../components/locationInfo/storeHours/storeHours.mocks';
import Marker from '../components/marker/Marker';
import Title from '../components/title/Title';
import {
  About,
  CarouselEntry,
  RecipeCard,
  Recipes,
  SocialMedia,
} from '../interfaces/contentful';
import styles from '../styles/LocationInfo.module.scss';
import { fetchEntries } from '../utils/contentful';
import { NextPageWithLayout } from './page';
interface Props {
  recipe: Recipes[];
  recipeCard: RecipeCard[];
  about: About[];
  socialMedias: SocialMedia[];
  carousel: CarouselEntry[];
}

export async function getStaticProps() {
  const recipe = await fetchEntries('recipe');
  const recipeCard = await fetchEntries('recipeCard');
  const about = await fetchEntries('about');
  const socialMedias = await fetchEntries('socialMedias');
  const carousel = await fetchEntries('carousel2');

  return {
    props: {
      recipe,
      recipeCard,
      about,
      socialMedias,
      carousel,
    },
  };
}

const LocationInfo: NextPageWithLayout<Props> = ({
  recipe,
  recipeCard,
  about,
  socialMedias,
  carousel,
}) => {
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
      <Carousel>
        {carousel.reverse().map((carousel) => (
          <div key={carousel.sys.id}>
            <CarouselCard
              title={carousel.fields.title}
              image={`https:${carousel.fields.image.fields.file.url}`}
            />
          </div>
        ))}
      </Carousel>
      <div className={styles.container__meals}>
        <h2>Little Big Meals</h2>
        <p>America&apos;s Most Loved Dinner</p>
        <div className={styles.container__cards}>
          {recipe.reverse().map((recipe) => (
            <div key={recipe.sys.id}>
              <DinnerCard
                title={recipe.fields.title}
                description={recipe.fields.description}
                price={recipe.fields.price}
                image={`https:${recipe.fields.image.fields.file.url}`}
                availableDate={recipe.fields.availableDate}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container__meals}>
        <h2>Little Big Meals</h2>
        <div className={styles.container__cards}>
          {recipeCard.reverse().map((recipeCard) => (
            <div key={recipeCard.sys.id}>
              <RecipesCard
                title={recipeCard.fields.title}
                time={recipeCard.fields.time}
                serve={recipeCard.fields.serve}
                image={`https:${recipeCard.fields.image.fields.file.url}`}
                link={recipeCard.fields.link}
              />
            </div>
          ))}
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
      {about.map((about) => (
        <div key={about.sys.id}>
          <ContentRow
            title={about.fields.title}
            description={about.fields.description}
            image={`https:${about.fields.image.fields.file.url}`}
          />
        </div>
      ))}
      <SocialMedias>
        {socialMedias.reverse().map((socialMedias) => (
          <div key={socialMedias.sys.id}>
            <SocialMediaCard
              icon={`https:${socialMedias.fields.icon.fields.file.url}`}
              image={`https:${socialMedias.fields.image.fields.file.url}`}
              description={socialMedias.fields.description}
              link={socialMedias.fields.link}
              textLink={socialMedias.fields.textLink}
            />
          </div>
        ))}
      </SocialMedias>
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
