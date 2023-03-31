/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import LocationsResults from '../components/searchResults/LocationsResults';
import Title from '../components/title/Title';
import styles from '../styles/SearchResults.module.scss';
import { NextPageWithLayout } from './page';

const SearchResults: NextPageWithLayout = () => {
  return (
    <section className={styles.container}>
      <Title title="Store locations" place="[City], [State]" color="black" />
      <LocationsResults />
    </section>
  );
};

export default SearchResults;

SearchResults.getLayout = (page) => {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'State', path: '/' },
    { name: 'City', path: '/search-results' },
  ];

  return (
    <PrimaryLayout>
      <NavBar />
      <Breadcrumb crumbs={crumbs} />
      {page}
    </PrimaryLayout>
  );
};
