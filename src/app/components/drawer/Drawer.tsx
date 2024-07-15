import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  placement?: "right" | "left" | "top" | "bottom";
  onClose: () => void;
}

function Drawer({ isOpen, placement = "right", onClose }: Props) {
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          className="text-[#6b6b6b] flex justify-center"
          fontSize={"small"}
        >
          YOUR CART
        </DrawerHeader>

        <DrawerBody></DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}

export default Drawer;
