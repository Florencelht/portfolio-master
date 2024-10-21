import styles from './books.module.css';

export const Book = ({ src, alt, title, href }) => {
    return (
          <div className={styles.box}>
          <div className={styles.bookTitle}>{title}</div>
          <a 
            className={styles.bookContainer}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={styles.book}>
              <img
                alt={alt}
                src={src}
              />
            </div>
          </a>
          
        </div>
    );
};

