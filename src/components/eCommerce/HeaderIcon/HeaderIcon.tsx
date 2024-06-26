import Cart from "@/assets/svg/cart.svg?react";
import Wishlist from "@/assets/svg/wishlist.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@/store/hooks";
import { getTotalQuantity } from "@/store/cart/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWishListTotalQuantity } from "@/store/wishlist/selectors";

const { container, quantity, pumping } = styles;

type TIcon = "cart" | "wishlist";

const HeaderIcon = ({ icon }: { icon: TIcon }) => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);

  const total = useAppSelector((state) => {
    if (icon === 'cart') {
      return getTotalQuantity(state)
    } else {
      return getWishListTotalQuantity(state)
    }
  });

  useEffect(() => {
    if (!total) return;
    setIsAnimate(true);

    const bounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(bounce);
  }, [total]);

  const renderedIcon =
    icon === "cart" ? (
      <Cart title="Cart icon" />
    ) : (
      <Wishlist title="Wishlist icon" />
    );

  return (
    <div className={container} title={`${icon} icon`} onClick={() => navigate(`/${icon}`)}>
      {renderedIcon}
      {total > 0 && <div className={`${quantity} ${isAnimate ? pumping : ""}`}>{total}</div>}
    </div>
  );
};

export default HeaderIcon;
