import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="flex flex-row justify-between items-center px-[70px] h-[100px]">
      <h2 className="text-3xl font-bold">My cars</h2>
      <input
        type="text"
        placeholder="Search cars"
        className="rounded-lg h-[40px] w-[200px] px-[10px] border border-gray-500"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}
export default CarSearch;
