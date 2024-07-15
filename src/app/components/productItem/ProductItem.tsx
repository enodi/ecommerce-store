import { Button, Image } from "@chakra-ui/react";

import { ProductType } from "@/lib/sanity/types";

interface Props {
  product: ProductType;
  addCartItem: (product: ProductType) => void;
  cartIds: string[];
}

function ProductItem({ product, addCartItem, cartIds }: Props) {
  const isDisabled = cartIds.includes(product._id);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={product?.productImage?.imageUrl}
        alt={product?.productImage?.alt || product?.name}
        className="max-w-full max-h-[180px] h-auto"
      />
      <p className="text-[#151615] text-sm text-center py-4">{product?.name}</p>
      <p className="text-[#151615] text-sm text-center py-4">{`$${product.price}.00`}</p>
      <Button
        colorScheme="teal"
        onClick={() => addCartItem(product)}
        isDisabled={isDisabled}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductItem;
