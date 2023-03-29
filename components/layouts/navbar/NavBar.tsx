import Link from 'next/link';
import styles from './NavBar.module.scss';

export interface INavBar {}

const NavBar: React.FC<INavBar> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/locationInfo">
        <p>Location info</p>
      </Link>
    </nav>
  );
};

export default NavBar;
