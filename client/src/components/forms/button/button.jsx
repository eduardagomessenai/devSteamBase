import styles from "./button.module.css";

const Button = ({ children, fullWidith }) => {
  return (
    <div className={`${styles.button} ${fullWidith && styles.fullWidith}`}>
      {children}
    </div>
  );
};

export default Button;
