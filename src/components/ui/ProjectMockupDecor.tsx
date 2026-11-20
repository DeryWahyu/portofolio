import styles from './ProjectMockup.module.css';

export default function ProjectMockupDecor() {
  return (
    <div className={styles.mockupDecor} aria-hidden="true">
      <span className={styles.mockupOrbit} />
      <span className={`${styles.mockupPanel} ${styles.mockupPanelLeft}`} />
      <span className={`${styles.mockupPanel} ${styles.mockupPanelRight}`} />
      <span className={`${styles.mockupSpark} ${styles.mockupSparkTop}`} />
      <span className={`${styles.mockupSpark} ${styles.mockupSparkBottom}`} />
    </div>
  );
}
