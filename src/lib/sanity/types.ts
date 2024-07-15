export type ProductType = {
  _id: string,
  name: string,
  productImage: {
    alt: string,
    imageUrl: string
  },
  slu: string,
  categoryName: string,
  description: string,
  price: number,
};