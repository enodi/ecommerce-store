import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";

import { ProductType } from "@/lib/sanity/types";

interface Props {
  isOpen: boolean;
  placement?: "right" | "left" | "top" | "bottom";
  onClose: () => void;
  itemsInCart: ProductType[];
  removeItemFromCart: (item: ProductType) => void;
}

function Cart({
  isOpen,
  placement = "right",
  onClose,
  itemsInCart,
  removeItemFromCart,
}: Props) {
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      size="lg"
      variant="dark"
    >
      <DrawerOverlay />
      <DrawerContent bg={"#f0f8ff"}>
        <DrawerCloseButton />
        <DrawerHeader
          className="text-[#6b6b6b] flex justify-center"
          fontSize={"small"}
        >
          YOUR CART
        </DrawerHeader>

        <DrawerBody>
          <div className="overflow-y-scroll">
            {!!itemsInCart && itemsInCart.length > 0 ? (
              itemsInCart.map((item: ProductType, index: number) => (
                <div
                  key={`${item._id}-${index}`}
                  className="flex flex-col bg-[#fff] mb-4 py-4 px-5"
                >
                  <div className="flex justify-between">
                    <p className="text-[#1e2d2b] text-sm">{item?.name}</p>
                    <button onClick={() => removeItemFromCart(item)}>X</button>
                  </div>
                  <div className="self-end">
                    <Image
                      src={item?.productImage?.imageUrl}
                      alt={item?.productImage?.alt || item?.name}
                      className="object-contain max-w-full max-h-20 w-24 mr-12 py-4"
                    />
                  </div>
                  <div>
                    <p className="text-[#151615] text-sm text-center py-4">{`$${item.price}.00`}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="font-light text-lg text-center flex-1">{`There's no item in the cart`}</p>
            )}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
