import React from 'react';
import styles from './.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <div>LOGO</div>
        <ul className={styles.links__list}>
          <li>
            <a href="#">اعرف عني اكثر</a>
          </li>
          <li>
            <a href="#certifications-section">إجازاتي</a>
          </li>
          <li>
            <a href="#lectures-section">محاضراتي</a>
          </li>
          <li>
            <a href="#review-section">آراء الطلاب</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header