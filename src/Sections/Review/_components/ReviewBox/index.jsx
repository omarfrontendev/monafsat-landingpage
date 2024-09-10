import React from 'react';
import styles from './.module.scss';

const ReviewBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.person__info}>
        <div className={styles.person__img}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.28jmE4s4hgzuaJnqvGffRQHaHa&pid=Api&P=0&h=220"
            alt=""
          />
        </div>
        <h5 className={styles.person__name}>محمد احمد</h5>
      </div>
      <q className={styles.text}>
        نظرًا لتعاوننا المستمر مع [اسم الشركة المنافسة]، فقد شهدنا تحقيق أفضل
        الإنجازات التي تعكس الجهود الكبيرة التي بذلتها الشركة في سبيل الوصول إلى
        العديد من النجاحات المتميزة.
      </q>
    </div>
  );
}

export default ReviewBox