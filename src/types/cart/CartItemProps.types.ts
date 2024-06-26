import { IProduct } from "@/types";

interface ICartItemProps extends IProduct {
  onChangeQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default ICartItemProps;
