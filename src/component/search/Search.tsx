import React, { FormEvent } from "react";
import "./search.scss";

type Prop = {
    id: string,
    placeholder: string,
    searchTerm: string,
    onSearch: (searchTerm: string) => void
}

const Search: React.FC<Prop> = ({
  id, placeholder, searchTerm, onSearch,
}: Prop) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <form
      id={`searchForm${id}`}
      onSubmit={onSubmit}
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
};

export default Search;
