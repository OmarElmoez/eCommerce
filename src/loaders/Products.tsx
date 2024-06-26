import { Params } from "react-router-dom";

interface ProductParams extends Params<string> {
  prefix?: string; 
}

 const ProductsLoader =  ({ params }: { params: ProductParams}) => {
  const { prefix } = params;

  if (typeof prefix !== "string" || !/^[a-z]+$/i.test(prefix)) {
    throw new Response("Bad request", {
      status: 400,
      statusText: "Category not found",
    });
  }
  return true;
}

export default ProductsLoader