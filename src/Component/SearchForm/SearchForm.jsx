const SearchForm = ({ filterValue, onChange }) => {
  return (
    <input type="text" value={filterValue} onChange={(e) => onChange(e.target.value)} placeholder="Search contacts..." />
  );
};

export default SearchForm;
