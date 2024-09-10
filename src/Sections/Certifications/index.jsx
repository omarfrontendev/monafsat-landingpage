import React from 'react';
import styles from './.module.scss';
import CertificationBox from './_components/CertificationBox';

const Certifications = () => {
  return (
    <section id="certifications-section" className={`section ${styles.section}`}>
      <h2 className={`section__title`}>إجازاتي</h2>
      <p className={`section__subtitle`}>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      </p>
      <div className={styles.list}>
        <CertificationBox />
        <CertificationBox />
        <CertificationBox />
        <CertificationBox />
        <CertificationBox />
      </div>
    </section>
  );
}

export default Certifications