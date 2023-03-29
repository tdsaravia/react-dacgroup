import React from 'react';
import styles from './Footer.module.scss';

export interface IFooter {
  copyrightText: string;
}

const Footer: React.FC<IFooter> = ({ copyrightText }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}>The Fresh Market</div>
      <div className={styles.footer__copyright}>
        &copy; {new Date().getFullYear()} {copyrightText}
      </div>
    </footer>
  );
};

export default Footer;
