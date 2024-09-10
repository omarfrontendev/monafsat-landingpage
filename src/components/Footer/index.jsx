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
            <MainButton>تواصل معي الآن</MainButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
