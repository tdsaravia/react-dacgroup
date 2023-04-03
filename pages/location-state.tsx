/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Location from '../components/location/Location';
import { mockLocationProps } from '../components/location/Location.mocks';
import LocationCityList from '../components/locationCityList/LocationCityList';
import SearchInput from '../components/searchInput/SearchInput';
import Title from '../components/title/Title';
import styles from '../styles/SearchResults.module.scss';
import { NextPageWithLayout } from './page';
const LocationState: NextPageWithLayout = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleClear = () => {
    setSearchText('');
  };
  return (
    <section className={styles.container}>
      <Title title="The Fresh Market in" place="[State]" color="green" />
      <SearchInput
        value={searchText}
        onChange={handleSearchChange}
        onClear={handleClear}
      />
      <LocationCityList city="a city name">
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
      </LocationCityList>
      <LocationCityList city="a city name">
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
      </LocationCityList>
      <LocationCityList city="a city name">
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
      </LocationCityList>
      <LocationCityList city="a city name">
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
        <Location {...mockLocationProps.base} />
      </LocationCityList>
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
