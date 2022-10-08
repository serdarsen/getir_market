import { rest } from "msw";
import {
  findBrandCountable,
  findItemTypeCountable,
  findProductPageable,
  findTagCountable,
} from "./repository";

export const controller = [
  rest.post("*/api/product_pageable", async (req, res, ctx) => {
    const {
      tagFilter,
      brandFilter,
      itemtypeFilter,
      order,
      sort,
      pageNo,
      perPage,
    } = await req.json();

    const pageable = findProductPageable(
      tagFilter,
      brandFilter,
      itemtypeFilter,
      order,
      sort,
      pageNo,
      perPage,
    );

    return res(
      ctx.status(200),
      ctx.json(pageable),
    );
  }),
  rest.post("*/api/tag_countable", async (req, res, ctx) => {
    const {
      searchTerm,
    } = await req.json();

    const countable = findTagCountable(searchTerm);

    return res(
      ctx.status(200),
      ctx.json(countable),
    );
  }),
  rest.post("*/api/brand_countable", async (req, res, ctx) => {
    const {
      searchTerm,
    } = await req.json();

    const countable = findBrandCountable(searchTerm);

    return res(
      ctx.status(200),
      ctx.json(countable),
    );
  }),

  rest.post("*/api/itemtype_countable", (req, res, ctx) => {
    const countable = findItemTypeCountable();

    return res(
      ctx.status(200),
      ctx.json(countable),
    );
  }),
];
