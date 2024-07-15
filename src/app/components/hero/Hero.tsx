import { Container, Select, SimpleGrid } from "@chakra-ui/react";

import { CategoryType } from "@/lib/sanity/types";

interface Props {
  categories: CategoryType[];
  handleProductFilter: (category: string) => void;
}

function Hero({ categories, handleProductFilter }: Props) {
  return (
    <Container className="md:py-40 py-5" maxW="8xl">
      <SimpleGrid columns={[1, null, 2]} spacing={10} alignItems={"center"}>
        <h1 className="text-5xl">All Products</h1>
        <Select
          placeholder="Filter By"
          onChange={(event) => handleProductFilter(event.target.value)}
        >
          {categories.map((category, index) => (
            <option key={`${category._id}-${index}`} value={category.name}>
              {category.name}
            </option>
          ))}
        </Select>
      </SimpleGrid>
    </Container>
  );
}

export default Hero;
