import { groq } from "next-sanity";
import client from "./client";

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"] {
      _id,
      name,
      productImage {"alt": images[0].alt, "imageUrl": images[0].asset->url},
      "slug": slug.current,
      "categoryName": category->name,
      description,
      price
    }`
  );
}