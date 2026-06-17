import styles from './Paragraph.module.css';
import React from 'react';

interface ParagraphProps {
  textSize?: string;
  textColor?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ textSize, textColor }) => {
  const size = textSize || '16px';
  const color = textColor || '#8E95A9';

  return (
    <p className={styles.paragraph} style={{ fontSize: size, color: color }}>
      Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
    </p>
  );
};

export default Paragraph;
