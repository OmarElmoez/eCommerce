import { CartItemList, CartSubtotalPrice } from "@/components/eCommerce";
import { Loading, LottieHandler } from "@/components/feedback";
import { useCart } from "@/hooks";
import { Col, Row } from "react-bootstrap";
const Cart = () => {
  const {
    loading,
    error,
    productsInfo,
    productsWithQuantity,
    changeQuantityHandler,
    removeItemHandler,
  } = useCart();
  return (
    <Loading status={loading} error={error} type="cart">
      {productsInfo.length > 0 ? (
        <>
          <CartItemList
            products={productsWithQuantity}
            onChangeQuantity={changeQuantityHandler}
            onRemoveItem={removeItemHandler}
          />
          <CartSubtotalPrice products={productsWithQuantity} />
        </>
      ) : (
        <Row>
          <Col>
            <LottieHandler type="empty" msg="Your cart is empty" />
          </Col>
        </Row>
      )}
    </Loading>
  );
};

export default Cart;
