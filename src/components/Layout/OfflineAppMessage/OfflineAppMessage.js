import styles from "./OfflineAppMessage.module.css";

const OfflineAppMessage = () => {
  return (
    <p className={styles.offline}>
      The app is currently working offline (no music)
    </p>
  );
};

export default OfflineAppMessage;
