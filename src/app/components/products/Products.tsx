import { Container, SimpleGrid, Box, Button } from "@chakra-ui/react";

function Products() {
  return (
    <Container maxW="8xl">
      <SimpleGrid columns={[1, 2, 3]} spacing={10} alignItems={"center"}>
        <Box>
          <Button colorScheme="purple">1</Button>
        </Box>
        <Box>
          <Button colorScheme="purple">2</Button>
        </Box>
        <Box>
          <Button colorScheme="purple">3</Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Products;
