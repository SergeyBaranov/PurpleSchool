import styles from './Paragraph.module.css';

function Paragraph ({textSize, textColor}) {

    textSize = textSize || '16px';
    textColor = textColor || '#8E95A9';

    return (
        <p className={styles.paragraph} style={{ fontSize: textSize, color: textColor }}>
            Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </p>
    )
}

export default Paragraph;