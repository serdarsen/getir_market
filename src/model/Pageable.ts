type Pageable<T> = {
  pageNo: number,
  perPage: number,
  data: T[];
  totalCount: number;
};

export default Pageable;
