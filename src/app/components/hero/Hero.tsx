import { Container, Select, SimpleGrid } from "@chakra-ui/react";

function Hero() {
  return (
    <Container className="py-20" maxW="8xl">
      <SimpleGrid columns={[1, null, 2]} spacing={10} alignItems={"center"}>
        <h1 className="text-5xl">All Products</h1>
        <Select placeholder="Filter By">
          <option value="option1">Fashion</option>
          <option value="option2">Phones & Tablets</option>
          <option value="option3">Appliances</option>
        </Select>
      </SimpleGrid>
    </Container>
  );
}

export default Hero;
