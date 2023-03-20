import Link from 'next/link';
import styles from './NavBar.module.css';

export interface INavBar {}

const NavBar: React.FC<INavBar> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </nav>
  );
};

export default NavBar;
