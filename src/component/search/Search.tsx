import React, { FormEvent, useEffect, useState } from "react";
import "./search.scss";

type Prop = {
    id: string,
    placeholder: string,
    onSearch: (searchTerm: string) => void
}

const Search: React.FC<Prop> = ({ id, placeholder, onSearch }: Prop) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    e.stopPropagation();
    onSearch(searchTerm);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

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
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default Search;
