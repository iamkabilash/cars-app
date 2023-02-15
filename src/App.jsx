import "./App.css";
import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarSearch from "./Components/CarSearch";
import CarValue from "./Components/CarValue";

function App() {
  return (
    <div>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
