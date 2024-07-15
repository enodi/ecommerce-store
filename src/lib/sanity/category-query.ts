import { groq } from "next-sanity";
import client from "./client";

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"] {
      _id,
      name,
    }`
  );
}