type ProductRequest = {
  tagFilter: string[];
  brandFilter: string[];
  itemtypeFilter: string[];
  order: string;
  sort: string;
  pageNo: number;
  perPage: number;
};

export default ProductRequest;
