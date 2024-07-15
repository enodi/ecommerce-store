import { defineType, defineField } from "sanity";

export const subCategoryType = defineType({
  title: "Sub Category",
  name: "subcategory",
  type: "document",
  fields: [
    defineField({
      title: "Sub Category Name",
      name: "name",
      type: "string"
    }),
    defineField({
      title: "Product Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }]
    })
  ]
})