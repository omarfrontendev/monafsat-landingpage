import React from 'react';
import styles from './.module.scss';

const DetailsBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.detail__info}>
        <span className={styles.val}>+200</span>
        <span className={styles.attr}>طالب</span>
      </div>
      <div className={styles.detail__info}>
        <span className={styles.val}>1000</span>
        <span className={styles.attr}>جلسة فقة</span>
      </div>
      <div className={styles.detail__info}>
        <span className={styles.val}>2500</span>
        <span className={styles.attr}>جلسة تلاوة</span>
      </div>
      <div className={styles.detail__info}>
        <span className={styles.val}>7 ايام</span>
        <span className={styles.attr}>متابعة الطالب</span>
      </div>
    </div>
  );
}

export default DetailsBox