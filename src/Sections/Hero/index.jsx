import React from 'react';
import styles from './.module.scss';
import MainButton from '../../components/MainButton';
import Me from '../../assets/me.jpeg'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.content} container`}>
        <div className={styles.text__content}>
          <span className={styles.subtitle}>أهلا وسهلا بيك انا</span>
          <h1 className={`${styles.title} green__text`}>الشيخ علاء</h1>
          <p className={styles.text}>
            خبرة 16 سنة في تحفيظ القرآن الكريم لجميع الأعمار, حاصل على الإجازات في متون التجويد
            محفظ وخبير في القرآن الكريم , حاصل على شهادة التجويد من معهد القراءات في الأزهر الشريف ,وصل إلى السنة الدراسية الثالثة في عالية القراءات بالأزهر الشريف.
            <br />
            <span className={styles.sub__p}>تعلّم القرآن وتجويده على يد شيخ متمكن. احجز درسك الآن!</span>
          </p>
          <MainButton>
            <a href="https://wa.me/01552676719" target="_blank" className={styles.contact__btn}>
              تواصل معي الآن
            </a>
          </MainButton>
        </div>
        <div className={styles.hero__image}>
          <img
            src={Me}
            alt="ragab_photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;