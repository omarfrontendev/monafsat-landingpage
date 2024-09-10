import React from 'react';
import styles from './.module.scss'

const CertificationBox = ({ image, title, date }) => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/file-1695862006750-2a3aca1bfdfaimage?w=416&dpr=2&auto=format&fit=crop&q=60"
          alt=""
        />
      </div>
      <div className={styles.text__content}>
        <h3 className={`orange__text ${styles.box__title}`}>
          الإجازة في الحديث الشريف
        </h3>
        <p className={`gray__text ${styles.text}`}>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        </p>
        <span className={`gray__text ${styles.date}`}>24/2024</span>
      </div>
    </div>
  );
}

export default CertificationBox