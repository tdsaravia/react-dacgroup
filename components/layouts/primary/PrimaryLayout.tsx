import Head from 'next/head';
import styles from './PrimaryLayout.module.scss';

export interface IPrimaryLayout {
  children?: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>React POC</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
