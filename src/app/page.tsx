"use client";

import { Fragment, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";

import Hero from "@/app/components/hero/Hero";
import { ProductType } from "@/lib/sanity/types";
import Drawer from "@/app/components/drawer/Drawer";
import Navbar from "@/app/components/navbar/Navbar";
import { getProducts } from "@/lib/sanity/product-query";
import Products from "@/app/components/products/Products";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetchData() {
      const products: ProductType[] = await getProducts();
    }
    fetchData();
  }, []);

  const handleDrawerOpen = () => onOpen();

  return (
    <Fragment>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <main>
        <Hero />
        <Products />
      </main>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
