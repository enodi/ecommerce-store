import { Container } from "@chakra-ui/react";

import { ProductType } from "@/lib/sanity/types";
import ProductItem from "@/app/components/productItem/ProductItem";

interface Props {
  products: ProductType[];
  selectedCategory?: string;
  addCartItem: (product: ProductType) => void;
}

function Products({ products, selectedCategory, addCartItem }: Props) {
  const localStorageCart =
    typeof window !== "undefined" && localStorage.getItem("cart");
  const itemsInCart = localStorageCart ? JSON.parse(localStorageCart) : [];
  const cartIds: string[] =
    itemsInCart.map((item: ProductType) => item._id) || [];

  return (
    <section className="py-16">
      <Container maxW="8xl">
        {selectedCategory && (
          <h3 className="text-lg font-bold mb-10">{`Selected Category: ${selectedCategory}`}</h3>
        )}
        <div className="grid grid-cols-1 gap-x-12 gap-y-28 items-end md:grid-cols-3">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductItem
                key={`${product._id}-${index}`}
                product={product}
                addCartItem={addCartItem}
                cartIds={cartIds}
              />
            ))
          ) : (
            <p>No Products to show at the moment</p>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Products;
