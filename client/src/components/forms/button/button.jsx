import styles from "./button.module.css";

const Button = ({ children, fullWidith, ...props }) => {
  return (
    <div
      className={`${styles.button} ${fullWidith && styles.fullWidith}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
