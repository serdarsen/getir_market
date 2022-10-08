import {
  createApi,
} from "@reduxjs/toolkit/query/react";

const DEFAULT_DELAY_MS = 150;

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: async (arg: any) => {
    await sleep(DEFAULT_DELAY_MS);
    return { data: arg?.body ? arg.body : null };
  },
  tagTypes: ["Brand", "Itemtype", "Product", "Tag"],
  endpoints: (builder) => ({
    brands: builder.query<Countable[], string>({
      query: (searchTerm: string) => [
        {
          name: "OHara-Group",
          count: 1,
        },
        {
          name: "Sipes-Inc",
          count: 1,
        },
      ],
      providesTags: ["Brand"],
    }),
    itemtypes: builder.query<Countable[], void>({
      query: () => [
        {
          name: "mug",
          count: 1,
        },
        {
          name: "shirt",
          count: 1,
        },
      ],
      providesTags: ["Itemtype"],
    }),
    products: builder.query<Pageable<Product[]>, string>({
      query: (query: string) => [
        {
          id: 1,
          tags: [
            "Trees",
          ],
          price: 10.99,
          name: "Handcrafted Trees Mug",
          description: "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
          slug: "Handcrafted-Trees-Mug",
          added: 1485723766805,
          manufacturer: "OHara-Group",
          itemType: "mug",
        },
        {
          id: 2,
          tags: [
            "Beach",
            "Trees",
          ],
          price: 19.99,
          name: "Rustic Beach Mug",
          description: "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
          slug: "Rustic-Beach-Mug",
          added: 1481573896833,
          manufacturer: "Sipes-Inc",
          itemType: "shirt",
        },
      ],
      providesTags: ["Product"],
    }),
    tags: builder.query<Countable[], string>({
      query: (searchTerm: string) => [
        {
          name: "Beach",
          count: 1,
        },
        {
          name: "Trees",
          count: 2,
        },
      ],
      providesTags: ["Tag"],
    }),
  }),
});
