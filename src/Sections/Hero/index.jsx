import React from 'react';
import styles from './.module.scss';
import MainButton from '../../components/MainButton';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.content} container`}>
        <div className={styles.text__content}>
          <span className={styles.subtitle}>أهلا وسهلا بيك انا</span>
          <h1 className={`${styles.title} green__text`}>علاء رجب</h1>
          <p className={styles.text}>
            قاضي شرعي ومفتي، يتمتع بخبرة واسعة في الفقه الإسلامي والقضايا
            المعاصرة. يقدم استشارات شرعية للعديد من المسلمين، ويسعى لتطبيق
            الشريعة الإسلامية في الحياة اليومية قاضي شرعي ومفتي، يتمتع بخبرة
            واسعة في الفقه الإسلامي والقضايا المعاصرة. يقدم استشارات شرعية
            للعديد من المسلمين، ويسعى لتطبيق الشريعة الإسلامية في الحياة اليومية
          </p>
          <MainButton>تواصل معي الآن</MainButton>
        </div>
        <div className={styles.hero__image}>
          <img
            src="https://images.unsplash.com/file-1695862006750-2a3aca1bfdfaimage?w=416&dpr=2&auto=format&fit=crop&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;