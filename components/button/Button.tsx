import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';

export interface IButton {
  text: string;
  link: string;
  width?: number;
  height?: number;
}

const Button: React.FC<IButton> = ({
  text,
  link,
  width = 100,
  height = 40,
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles.customWidth]: width !== 100,
    [styles.customHeight]: height !== 40,
  });

  return (
    <Link href={link} className={buttonClasses} style={{ width, height }}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default Button;
