import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="w-screen h-[150px] bg-orange-200 top-0 p-[10px]">
      <h2 className="p-[10px] pl-[50px] text-3xl font-bold">Add a car</h2>
      <form
        className="flex flex-row justify-center items-end gap-[80px]"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col">
          <label>Car name</label>
          <input
            type="text"
            className="w-[200px] h-[35px] rounded-lg px-[10px]"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Car value</label>
          <input
            type="number"
            className="w-[200px] h-[35px] rounded-lg px-[10px]"
            value={cost || ""}
            onChange={handleCostChange}
          />
        </div>
        <div className="flex flex-col">
          <button className="w-[100px] h-[35px] rounded-lg bg-green-300 hover:bg-green-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
