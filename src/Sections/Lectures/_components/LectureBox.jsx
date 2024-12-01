import React from "react";
import styles from "./.module.scss";
import MainButton from "../../../components/MainButton";
import { FaPlay } from "react-icons/fa";
import YouTubeEmbed from "./YouTubeEmbed";

const LectureBox = ({ main, title, videoId, text }) => {
  return (
    <div className={`${styles.box} ${main ? styles.main : ""}`}>
      <div className={styles.image}>
        <YouTubeEmbed title={title} videoId={videoId} />
      </div>
      <div className={styles.content}>
        <h4 className={`orange__text ${styles.title}`}>
          {title}
        </h4>
        <p className={`gray__text ${styles.text}`}>
          {text}
        </p>
        {main ? (
          <MainButton>
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className={styles.button__content}>
              <FaPlay />
              مشاهدة
            </a>
          </MainButton>
        ) : (
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className={styles.play__button}>
            <FaPlay />
            مشاهدة
          </a>
        )}
      </div>
    </div>
  );
};

export default LectureBox;
