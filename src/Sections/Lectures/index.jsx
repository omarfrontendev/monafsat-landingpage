import React from 'react';
import styles from './.module.scss';
import LectureBox from './_components/LectureBox';
import { FaYoutube } from "react-icons/fa6";

const Lectures = () => {

  const videos = [
    {
      title: 'مع أول حلقات التجويد " باب الاستعاذة " الشيخ علاء رجب',
      videoId: 'LtkPpS0-iOg',
      text: "اللهم اهدنا واهدي بنا واجعلنا سببا لمن اهتدا {رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ* رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ}",
    },
    {
      title: 'مع ثاني حلقات التجويد " النون الساكنة والتنوين " { الاظهار} الشيخ علاء رجب',
      videoId: 'acjWsXI7z5Q',
      text: "اللهم اهدنا واهدي بنا واجعلنا سببا لمن اهتدا {رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ* رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ}",
    },
    {
      title: 'مع ثالث حلقات التجويد " النون الساكنة والتنوين " {الادغام} الشيخ علاء رجب',
      videoId: 'Kv1DURPXPRg',
      text: "اللهم اهدنا واهدي بنا واجعلنا سببا لمن اهتدا {رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ* رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ}",
    },
    {
      title: 'مع رابع حلقات التجويد " النون الساكنة والتنوين " {الأقلاب} الشيخ علاء رجب',
      videoId: 'I-HGmgbMpE8',
      text: "اللهم اهدنا واهدي بنا واجعلنا سببا لمن اهتدا {رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ* رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ}",
    },
  ];

  return (
    <section id="lectures-section" className={`section ${styles.section}`}>
      <h2 className={`section__title`}>محاضراتي</h2>
      <p className={`section__subtitle`} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap:"12px" }}>
        بعض دروس الخاصة بالتجويد ويمكنك الاطلاع اكتر من خلال قناتى
        <a href='https://www.youtube.com/@ramadan_ahmed71' target='_blank' style={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}><FaYoutube /></a>
      </p>
      <div className={styles.content}>
        <div className={styles.main__box}>
          <LectureBox main title={videos[0]?.title} videoId={videos[0]?.videoId} text={videos[0]?.text} />
        </div>
        <div className={styles.list}>
          {videos.slice(1)?.map((video, i) => (
            <LectureBox key={i} title={video?.title} videoId={video?.videoId} text={video?.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lectures