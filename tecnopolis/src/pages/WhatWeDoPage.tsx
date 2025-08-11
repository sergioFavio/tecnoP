import styles from "./WhatWeDoPage.module.css";

const WhatWeDoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['box-card']}>
        <div className={`${styles.face} ${styles.front}`}>Front</div>
        <div className={`${styles.face} ${styles.back}`}>Back</div>
        <div className={`${styles.face} ${styles.right}`}>Right</div>
        <div className={`${styles.face} ${styles.left}`}>Left</div>
        <div className={`${styles.face} ${styles.top}`}>Top</div>
        <div className={`${styles.face} ${styles.bottom}`}>Bottom</div>
      </div>
    </div>
  );
}

export default WhatWeDoPage;

