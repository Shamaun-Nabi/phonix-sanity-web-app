export default {
  name: 'product',
  title: 'Product_As',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      title: 'CoverPic',
      name: 'coverPic',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 85,
      },
    },
  ],
}
