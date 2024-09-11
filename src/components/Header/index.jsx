import React, { useState } from 'react';
import styles from './.module.scss';
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={`${styles.header} ${openMenu ? styles.opened : styles.closed}`}
    >
      <div className={styles.overlay} onClick={() => setOpenMenu(false)}></div>
      <nav className={`${styles.nav} container`}>
        <button className={styles.open__btn} onClick={() => setOpenMenu(true)}>
          <RiMenu3Fill />
        </button>
        <div>LOGO</div>
        <ul className={styles.links__list}>
          <li>
            <button
              className={styles.close__btn}
              onClick={() => setOpenMenu(false)}
            >
              <IoMdClose />
            </button>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="#">اعرف عني اكثر</a>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="#certifications-section">إجازاتي</a>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="#lectures-section">محاضراتي</a>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="#review-section">آراء الطلاب</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header