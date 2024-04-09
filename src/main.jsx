import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParkingsProvider } from "./contexts/ParkingsContext.jsx";
import { FiltersProvider } from "./contexts/Filters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <ParkingsProvider>
      <App />
    </ParkingsProvider>
  </FiltersProvider>
);
