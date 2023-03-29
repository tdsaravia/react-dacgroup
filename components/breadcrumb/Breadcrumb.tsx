import Link from 'next/link';
import React from 'react';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  crumbs: {
    name: string;
    path?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ol>
        {crumbs.map(({ name, path }, index) => {
          const isLastCrumb = index === crumbs.length - 1;
          const linkMarkup = path ? (
            <Link href={path}>
              <p>{name}</p>
            </Link>
          ) : (
            <span>{name}</span>
          );
          return (
            <li key={name}>
              {linkMarkup}
              {!isLastCrumb && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
