import drop from "lodash/drop";
import filter from "lodash/filter";
import includes from "lodash/includes";
import intersection from "lodash/intersection";
import orderBy from "lodash/orderBy";
import type { Countable, Pageable, Product } from "../model";
import database from "./database.json";

const findPageable = <T> (
  items: T[],
  pageNo = 1,
  perPage = 16,
): Pageable<T> => {
  const offset = (pageNo - 1) * perPage;
  const pagedItems = drop(items, offset).slice(0, perPage);

  return ({
    pageNo,
    perPage,
    data: pagedItems,
    totalCount: items.length,
  });
};

export const findProductPageable = (
  tagFilter: string[],
  brandFilter: string[],
  itemtypeFilter: string[],
  order: "asc" | "desc",
  sort: string,
  pageNo: number,
  perPage: number,
): Pageable<Product> => {
  let items = filter(
    database.products,
    ({
      tags,
      manufacturer,
      itemType,
    }) => (
      intersection(tagFilter, tags).length
      === tagFilter.length
      || tagFilter.includes("All")
    )
    && (
      brandFilter.length === 0
      || includes(brandFilter, manufacturer)
      || brandFilter.includes("All")
    )
    && (
      itemtypeFilter.length === 0
      || includes(itemtypeFilter, itemType)
    ),
  );

  items = orderBy(items, [sort], [order]);

  return findPageable<Product>(items, pageNo, perPage);
};

export const findTagCountable = (
  searchTerm: string,
): Countable[] => {
  console.log("findTagCountable searchTerm: ", searchTerm);

  return database.tagCountable;
};

export const findBrandCountable = (
  searchTerm: string,
): Countable[] => {
  console.log("findBrandCountable searchTerm: ", searchTerm);

  return database.brandCountable;
};

export const findItemTypeCountable = (): Countable[] => {
  console.log("findItemTypeCountable");

  return database.itemtypeCountable;
};
