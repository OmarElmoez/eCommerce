import { IProduct } from "@/types"

type TCartItemListProps = {
  products: IProduct[],
  onChangeQuantity: (id: number, quantity: number) => void,
  onRemoveItem: (id: number) => void
}

export default TCartItemListProps