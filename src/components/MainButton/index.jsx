import React from 'react';
import styles from './.module.scss';

const MainButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
}

export default MainButton