import { useDispatch } from "react-redux";
import { getFilter } from "../../redux/filterSlice";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(getFilter(event.target.value));
  };
    
    return (
        <div>
            <p>Find contacts</p>
            <input
                type="text"
                onChange={handleFilterChange}
            />
            
        </div>
    );
};

export default SearchForm;
