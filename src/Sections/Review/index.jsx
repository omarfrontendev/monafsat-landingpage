import React from 'react';
import styles from './.module.scss';
import DetailsBox from './_components/DetailsBox';
import ReviewBox from './_components/ReviewBox';

const Review = () => {
  return (
    <section id="review-section" className={`section ${styles.section}`}>
      <h2 className={`section__title`}>آراء الطلاب</h2>
      <p className={`section__subtitle`}>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
      <DetailsBox />
      <div className={styles.list}>
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </div>
    </section>
  );
}

export default Review