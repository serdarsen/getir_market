import { faker } from "@faker-js/faker";
import {
  factory, manyOf, oneOf, primaryKey,
} from "@mswjs/data";
import type {
  QuerySelectorWhere, SortDirection,
} from "@mswjs/data/lib/query/queryTypes";
import { range } from "lodash";
import type { Countable, Pageable } from "../model";

faker.seed(123);

const itemTypes = ["shirt", "mug"];

const db = factory({
  tag: {
    name: primaryKey(faker.random.word),
  },
  brand: {
    id: primaryKey(faker.datatype.uuid),
    slug: faker.lorem.slug,
    name: faker.company.name,
    address: faker.address.streetAddress,
    city: faker.address.city,
    state: faker.address.state,
    zip: faker.address.zipCode,
    account: () => parseFloat(faker.random.numeric()),
    contact: faker.name.fullName,
  },
  product: {
    id: primaryKey(faker.datatype.uuid),
    tags: manyOf("tag"),
    price: () => parseFloat(faker.commerce.price()),
    name: faker.commerce.productName,
    description: faker.commerce.productDescription,
    slug: faker.lorem.slug,
    added: faker.date.recent,
    brand: oneOf("brand"),
    itemType: () => faker.helpers.arrayElement(itemTypes),
    imageUrl: () => faker.image.cats(92, 92),
  },
});

type MockTag = typeof db.tag.create.prototype;
type MockBrand = typeof db.brand.create.prototype;
type MockProduct = typeof db.product.create.prototype;

const mockTags: MockTag[] = [];
const mockTagNames: string[] = [];
const mockTagCounts: { [name: string]: number } = {};
const mockBrands: MockBrand[] = [];
const mockBrandNames: string[] = [];
const mockBrandCounts: { [name: string]: number } = {};
const mockProducts: MockProduct[] = [];

range(0, 15).forEach(() => {
  const tag: MockTag = db.tag.create();
  mockTags.push(tag);
  mockTagNames.push(tag?.name);
});

range(0, 20).forEach(() => {
  const brand: MockBrand = db.brand.create();
  mockBrands.push(brand);
  mockBrandNames.push(brand?.name);
});

range(0, 267).forEach(() => {
  const tags: MockTag[] = faker.helpers.arrayElements(mockTags);

  tags.forEach((tag) => {
    const count = mockTagCounts[tag.name];
    mockTagCounts[tag.name] = count ? count + 1 : 1;
  });

  const brand: MockBrand = faker.helpers.arrayElement(mockBrands);

  const count = mockBrandCounts[brand.name];
  mockBrandCounts[brand.name] = count ? count + 1 : 1;

  const product: MockProduct = db.product.create({ tags, brand });

  mockProducts.push(product);
});

export const findProductPageable = (
  tagFilter: string[],
  brandFilter: string[],
  itemtypeFilter: string[],
  order: SortDirection,
  sort: string,
  pageNo: number,
  perPage: number,
): Pageable<MockProduct> => {
  const where: QuerySelectorWhere<MockProduct> = {
    tags: {
      name: {
        in: tagFilter?.includes("All") || !tagFilter?.length
          ? mockTagNames : tagFilter,
      },
    },
    brand: {
      name: {
        in: brandFilter?.includes("All") || !brandFilter?.length
          ? mockBrandNames : brandFilter,
      },
    },
    itemType: {
      in: itemtypeFilter?.length ? itemtypeFilter : itemTypes,
    },
  };

  const data = db.product.findMany({
    where,
    skip: (pageNo - 1) * perPage,
    take: perPage,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    orderBy: {
      [sort]: order,
    },
  });

  const totalCount = db.product.count(
    {
      where,
    },
  );

  return {
    pageNo,
    perPage,
    data,
    totalCount,
  };
};

export const findTagCountable = (
  searchTerm: string,
): Countable[] => Object.keys(mockTagCounts)
  .filter((name) => name.includes(searchTerm))
  .map((name) => ({
    name,
    count: mockTagCounts[name],
  }));

export const findBrandCountable = (
  searchTerm: string,
): Countable[] => Object.keys(mockBrandCounts)
  .filter((name) => name.includes(searchTerm))
  .map((name) => ({
    name,
    count: mockBrandCounts[name],
  }));

export const findItemTypeCountable = (): Countable[] => [
  { name: "shirt", count: 1 }, { name: "mug", count: 1 },
];
