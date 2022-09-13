import React from "react";
import "./search.scss";

type Prop = {
    id: string,
    placeholder: string,
    searchTerm: string,
    onSearch: (searchTerm: string) => void
}

const Search: React.FC<Prop> = ({
  id, placeholder, searchTerm, onSearch,
}: Prop) => (
  <form
    id={`searchForm${id}`}
    onSubmit={(e) => {
      e.stopPropagation();
    }}
  >
    <input
      id={`searchInput${id}`}
      className="search"
      type="text"
      placeholder={placeholder}
      name="search"
      value={searchTerm}
      onChange={(e) => {
        e.stopPropagation();
        onSearch(e.target.value);
      }}
    />
  </form>
);

export default Search;
