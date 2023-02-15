import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector((state) => {
    const filteredCars = state.cars.carsList.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchterm.toLowerCase())
    );
    // return state.cars.carsList;

    return {
      cars: filteredCars,
      name: state.form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className="flex flex-row items-center justify-between py-[10px] px-[25px] mt-[40px] my-[10px] rounded-xl bg-gray-100"
      >
        <p className={bold && "font-bold"}>
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
