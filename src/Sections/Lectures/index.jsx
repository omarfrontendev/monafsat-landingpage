import React from 'react';
import styles from './.module.scss';
import LectureBox from './_components/LectureBox';

const Lectures = () => {
  return (
    <section id="lectures-section" className={`section ${styles.section}`}>
      <h2 className={`section__title`}>محاضراتي</h2>
      <p className={`section__subtitle`}>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
      <div className={styles.content}>
        <div className={styles.main__box}>
          <LectureBox main />
        </div>
        <div className={styles.list}>
          <LectureBox />
          <LectureBox />
          <LectureBox />
        </div>
      </div>
    </section>
  );
}

export default Lectures