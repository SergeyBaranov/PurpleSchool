import styles from './Heading.module.css';
import React from 'react';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
};

export default Heading;
