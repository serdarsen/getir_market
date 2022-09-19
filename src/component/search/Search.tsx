import { FC } from "react";
import "./search.scss";

type Prop = {
    id: string,
    placeholder: string,
    searchTerm: string,
    onSearch: (searchTerm: string) => void
}

const Search: FC<Prop> = ({
  id, placeholder, searchTerm, onSearch,
}: Prop) => (
  <form
    id={`searchForm${id}`}
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <input
      id={`searchInput${id}`}
      className="search"
      type="text"
      placeholder={placeholder}
      name="search"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  </form>
);

export default Search;
