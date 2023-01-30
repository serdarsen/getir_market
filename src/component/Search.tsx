type Prop = {
  id: string,
  placeholder: string,
  searchTerm: string,
  onSearch: (searchTerm: string) => void
};

const Search: React.FC<Prop> = ({
  id, placeholder, searchTerm, onSearch,
}: Prop) => (
  <form
    id={`searchForm${id}`}
    onSubmit={(e) => {
      e.preventDefault();
    }}
    className="border-custom-black-100
               rounded-2
               border-2
               border-solid"
  >
    <input
      id={`searchInput${id}`}
      className="w-full
                 p-[0.75rem]"
      type="text"
      placeholder={placeholder}
      name="search"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  </form>
);

export default Search;
