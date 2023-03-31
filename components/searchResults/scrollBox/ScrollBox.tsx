import React from 'react';
import styles from './ScrollBox.module.scss';

interface ScrollBoxProps {
  height: string;
  children: React.ReactNode;
}

const ScrollBox: React.FC<ScrollBoxProps> = ({ height, children }) => {
  return (
    <div className={styles.scrollbox} style={{ height }}>
      {children}
    </div>
  );
};

export default ScrollBox;
