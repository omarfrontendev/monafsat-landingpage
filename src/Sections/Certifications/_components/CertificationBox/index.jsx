import React from 'react';
import styles from './.module.scss'

const CertificationBox = ({ image, title, subtitle, date }) => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img
          src={image}
          alt="certification__image"
        />
      </div>
      <div className={styles.text__content}>
        <h3 className={`orange__text ${styles.box__title}`}>
          {title}
        </h3>
        <p className={`gray__text ${styles.text}`}>
          {subtitle}
        </p>
        <span className={`gray__text ${styles.date}`}>{date}</span>
      </div>
    </div>
  );
}

export default CertificationBox