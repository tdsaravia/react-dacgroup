/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NavBar from '../components/layouts/navbar/NavBar';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { ContentfulEntry } from '../interfaces/contentful';
import styles from '../styles/Home.module.scss';
import { fetchEntries } from '../utils/contentful';
import { NextPageWithLayout } from './page';

interface Props {
  carousel: ContentfulEntry[];
}

export async function getStaticProps() {
  const carousel = await fetchEntries('carousel');
  return {
    props: {
      carousel,
    },
  };
}

const Home: NextPageWithLayout<Props> = ({ carousel }) => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      {carousel.map((carousel) => (
        <div key={carousel.sys.id}>
          <h1>{carousel.fields.title}</h1>
          <p>{carousel.fields.description}</p>
          <img
            src={carousel.fields.image.fields.file.url}
            alt="image"
            className="image"
          />
        </div>
      ))}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  const crumbs = [{ name: 'Home', path: '/' }];
  return (
    <PrimaryLayout>
      <NavBar />
      <Breadcrumb crumbs={crumbs} />
      {page}
    </PrimaryLayout>
  );
};
