import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Countable, Pageable, Product } from "../model";
import ProductRequest from "../model/ProductRequest";

const { location } = window || {};
const { protocol, hostname } = location || {};
const isDev = process.env.DEV === "true";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: isDev
      ? `${protocol}//${hostname}:3004/api`
      : "/api",
  }),
  tagTypes: ["Brand", "Itemtype", "Product", "Tag"],
  endpoints: (builder) => ({
    products: builder.query<Pageable<Product>, ProductRequest>({
      query: (productRequest: ProductRequest) => ({
        url: "/product_pageable",
        method: "POST",
        body: productRequest,
      }),
      providesTags: ["Product"],
    }),
    tags: builder.query<Countable[], string>({
      query: (searchTerm: string) => ({
        url: "/tag_countable",
        method: "POST",
        body: { searchTerm },
      }),
      providesTags: ["Tag"],
    }),
    brands: builder.query<Countable[], string>({
      query: (searchTerm: string) => ({
        url: "/brand_countable",
        method: "POST",
        body: { searchTerm },
      }),
      providesTags: ["Brand"],
    }),
    itemtypes: builder.query<Countable[], void>({
      query: () => ({
        url: "/itemtype_countable",
        method: "POST",
      }),
      providesTags: ["Itemtype"],
    }),

  }),
});

export const {
  useBrandsQuery,
  useProductsQuery,
  useItemtypesQuery,
  useTagsQuery,
} = api;
