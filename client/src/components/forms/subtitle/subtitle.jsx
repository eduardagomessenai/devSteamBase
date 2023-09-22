import styles from "./subtitle.module.css";

const Subtitle = ({ children }) => {
  const child = children;
  return <h2 className={styles.subtitle}>{children} </h2>;
};

export default Subtitle;
