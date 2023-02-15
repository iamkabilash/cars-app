import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchterm: "",
    carsList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchterm = action.payload;
    },
    addCar(state, action) {
      // action.payload = {name: "ford", cost: 500}
      state.carsList.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      // action.payload = id of the car to be removed.
      const updated = state.carsList.filter((car) => {
        return car.id !== action.payload;
      });
      state.carsList = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
