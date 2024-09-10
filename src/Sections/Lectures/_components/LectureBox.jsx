import React from "react";
import styles from "./.module.scss";
import MainButton from "../../../components/MainButton";
import { FaPlay } from "react-icons/fa";

const LectureBox = ({ main }) => {
  return (
    <div className={`${styles.box} ${main ? styles.main : ""}`}>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/file-1695862006750-2a3aca1bfdfaimage?w=416&dpr=2&auto=format&fit=crop&q=60"
          alt=""
        />
      </div>
      <div className={styles.content}>
        <h4 className={`orange__text ${styles.title}`}>
          الإجازة في الحديث الشريف
        </h4>
        <p className={`gray__text ${styles.text}`}>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        </p>
        {main ? (
          <MainButton>
            <div className={styles.button__content}>
              <FaPlay />
              مشاهدة
            </div>
          </MainButton>
        ) : (
          <button className={styles.play__button}>
            <FaPlay />
            مشاهدة
          </button>
        )}
      </div>
    </div>
  );
};

export default LectureBox;
