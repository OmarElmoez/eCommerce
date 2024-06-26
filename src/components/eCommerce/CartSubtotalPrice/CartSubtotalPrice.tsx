import { IProduct } from "@/types";
import styles from "./styles.module.css";

const CartSubtotalPrice = ({ products }: { products: IProduct[] }) => {

  const totalPrice = products.reduce((total, product) => {
    return total + (product.price * (product.quantity || 1));
  }, 0)

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{totalPrice.toFixed(2)} EGP</span>
    </div>
  );
};

export default CartSubtotalPrice;
