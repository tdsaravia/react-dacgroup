/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Title from '../components/title/Title';
import styles from '../styles/SearchResults.module.scss';
import { NextPageWithLayout } from './page';

const LocationState: NextPageWithLayout = () => {
  return (
    <section className={styles.container}>
      <Title title="The Fresh Market in" place="[State]" color="green" />
    </section>
  );
};

export default LocationState;

LocationState.getLayout = (page) => {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'State', path: '/location-state' },
  ];

  return (
    <PrimaryLayout>
      <NavBar />
      <Breadcrumb crumbs={crumbs} />
      {page}
    </PrimaryLayout>
  );
};
