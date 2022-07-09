export default {
  name: "featured",
  title: "Featured menu category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
      type: "string",
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
