interface IProduct {
  id: number,
  title: string,
  price: number,
  cat_prefix: string,
  img: string,
  quantity?: number,
  max: number,
  isLiked?: boolean,
}

export default IProduct