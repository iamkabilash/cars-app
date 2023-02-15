import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector((state) => {
    const filteredCars = state.cars.carsList.filter((car) => {
      return car.name
        .toLowerCase()
        .includes(state.cars.searchterm.toLowerCase());
    });
    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div className="text-center mt-[50px] text-2xl font-bold text-red-800">
      <h2>Total cost: ${totalCost}</h2>
    </div>
  );
}
export default CarValue;
