import { useFilters } from "../hooks/useFilters";
import { useParkings } from "../hooks/useParkings";

export function Header({ userparking, error, handleSelectParking }) {
  const { parkings } = useParkings();
  const { setFilters } = useFilters();

  function handleCategoryChange(event) {
    event.preventDefault();
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  }

  function handleInputChange(event) {
    event.preventDefault();
    const max = Number(event.target.max);
    if (Number(event.target.value) > max) {
      event.target.value = max;
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: Number(event.target.value),
    }));
  }

  return (
    <header>
      <h1>Parking Washington </h1>
      <p>Total parkings: {parkings.length}</p>
      <form>
        <label>
          Width
          <input
            name="width"
            type="number"
            max={3}
            required
            onChange={handleInputChange}
            placeholder="1-3"
          />
        </label>
        <label>
          Large
          <input
            name="large"
            type="number"
            max={6}
            required
            onChange={handleInputChange}
            placeholder="1-6"
          />
        </label>
        <label>
          <select name="category" onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="compact">Compact</option>
            <option value="regular">Regular</option>
            <option value="big">Big</option>
          </select>
        </label>
        <button
          onClick={handleSelectParking}
          disabled={userparking === false ? true : false}
          style={{
            background: error === false ? "white" : "red",
          }}
        >
          Select parking
        </button>
      </form>
    </header>
  );
}
