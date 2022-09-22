type PageRequest = {
  pageNo: number;
  sortOption: string[];
  brandFilter: string[];
  tagFilter: string[];
  itemTypeFilter: string[];
};

export default PageRequest;
