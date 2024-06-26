import React, { memo } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { ICartItemProps } from "@/types";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

const CartItem = memo(({
  id,
  img,
  title,
  price,
  quantity,
  max,
  onChangeQuantity,
  onRemoveItem,
}: ICartItemProps) => {
  
  const onChangeQuantityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = +e.target.value;
    onChangeQuantity(id, quantity);
  };

  const onRemoveItemHandler = () => {
    onRemoveItem(id);
  }

  return (
    <article className={cartItem}>
      <div className={product}>
        <header className={productImg}>
          <img src={img} alt={title} />
        </header>
        <section className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} EGP</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
            onClick={onRemoveItemHandler}
          >
            Remove
          </Button>
        </section>
      </div>

      <section className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select value={quantity} onChange={onChangeQuantityHandler}>
          {Array.from({ length: max }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Form.Select>
      </section>
    </article>
  );
});

export default CartItem;
