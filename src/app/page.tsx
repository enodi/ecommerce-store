"use client";

import { useDisclosure } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";

import Hero from "@/app/components/hero/Hero";
import Cart from "@/app/components/cart/Cart";
import Navbar from "@/app/components/navbar/Navbar";
import Products from "@/app/components/products/Products";
import { getCategories } from "@/lib/sanity/category-query";
import { ProductType, CategoryType } from "@/lib/sanity/types";
import { getProducts, getSelectedProducts } from "@/lib/sanity/product-query";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  const localStorageCartItem =
    typeof window !== "undefined" && localStorage.getItem("cart");
  const parsedCartItems =
    localStorageCartItem && JSON.parse(localStorageCartItem);
  const itemsInCart = cartItems.length > 0 ? cartItems : parsedCartItems;

  const localStorageCartItemCount =
    typeof window !== "undefined" && localStorage.getItem("cartCount");
  const cartCount: number =
    localStorageCartItemCount && JSON.parse(localStorageCartItemCount);
  const itemCount = cartItemsCount || cartCount;

  useEffect(() => {
    async function fetchProducts() {
      const allProducts: ProductType[] = await getProducts();
      setProducts(allProducts);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      const allCategories: CategoryType[] = await getCategories();
      setCategories(allCategories);
    }
    fetchCategories();
  }, []);

  const handleDrawerOpen = () => onOpen();

  const handleProductFilter = async (category: string) => {
    let product: ProductType[] = [];
    if (!!category) {
      product = await getSelectedProducts(category);
    } else {
      product = await getProducts();
    }
    setProducts(product);
    setSelectedCategory(category);
  };

  const addCartItem = (product: ProductType) => {
    let cart: ProductType[] = [];
    const count = cartCount + 1;
    const products = [];
    products.push(product);

    if (!!itemsInCart) {
      cart = [...itemsInCart, ...products];
    } else {
      cart = [...products];
    }

    setCartItems(cart);
    setCartItemsCount(count);

    updateLocalStorage(count, cart);
  };

  const removeItemFromCart = (product: ProductType) => {
    const count = cartCount - 1;
    const filteredItems = itemsInCart.filter(
      (item: ProductType) => item._id !== product._id
    );

    setCartItems(filteredItems);
    setCartItemsCount(count);

    updateLocalStorage(count, filteredItems);
  };

  const updateLocalStorage = (count: number, cart: ProductType[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartCount", JSON.stringify(count));
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <Fragment>
      <Navbar handleDrawerOpen={handleDrawerOpen} itemCount={itemCount} />
      <main>
        <Hero
          categories={categories}
          handleProductFilter={handleProductFilter}
        />
        <Products
          products={products}
          selectedCategory={selectedCategory}
          addCartItem={addCartItem}
        />
      </main>
      <Cart
        isOpen={isOpen}
        onClose={onClose}
        itemsInCart={itemsInCart}
        removeItemFromCart={removeItemFromCart}
      />
    </Fragment>
  );
}
