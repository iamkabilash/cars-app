import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.carsList.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchterm.toLowerCase())
    );
    // return state.cars.carsList;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div
        key={car.id}
        className="flex flex-row items-center justify-between py-[10px] px-[25px] mt-[40px] my-[10px] rounded-xl bg-gray-100"
      >
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="bg-red-400 hover:bg-red-500 hover:text-white p-[5px] rounded-lg"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="px-[80px]">{renderedCars}</div>;
}
export default CarList;
