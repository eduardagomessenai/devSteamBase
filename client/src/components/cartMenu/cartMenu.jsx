import Button from "../forms/button/button";
import styles from "./cartMenu.module.css";

const CartMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.options}></div>
      <div className={styles.priceLine}></div>
      <Button>Finalizar Compra</Button>
    </div>
  );
};

export default CartMenu;
