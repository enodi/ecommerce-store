"use client";

import { CiShoppingCart } from "react-icons/ci";
import { Container, Icon } from "@chakra-ui/react";

interface Props {
  handleDrawerOpen: () => void;
  itemCount?: number;
}

function Navbar({ handleDrawerOpen, itemCount }: Props) {
  return (
    <header className="bg-[#f5f5f4] h-14 flex w-full">
      <Container className="flex justify-between items-center" maxW="8xl">
        <h1>Ecommerce Store</h1>
        <div>
          <Icon
            as={CiShoppingCart}
            boxSize={8}
            onClick={handleDrawerOpen}
            className="cursor-pointer"
          />
          {!!itemCount && <span>{itemCount}</span>}
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
