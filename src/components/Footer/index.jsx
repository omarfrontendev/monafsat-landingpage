import React from "react";
import styles from "./.module.scss";
import MainButton from "../MainButton";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <h4 className={`orange__text ${styles.footer__title}`}>
            حان الان لتعلم كيفية التلاوة والتجويد
          </h4>
          <MainButton>
            <a href="https://wa.me/01552676719" target="_blank">
              تواصل معي الآن
            </a>
          </MainButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
