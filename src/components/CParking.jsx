import { useParkings } from "../hooks/useParkings";
import { PostApi } from "../services/Callparkings";
import "../styles/Cparking.css";

export function CreateParking() {
  const { refreshParkings } = useParkings();

  function handleFormSubmit(event) {
    event.preventDefault();
    const width = parseFloat(event.target.elements["width"].value);
    const large = parseFloat(event.target.elements["large"].value);
    const category = event.target.elements["category"].value;
    const data = {
      width: width,
      large: large,
      category: category,
      vehicle: 0,
      occupied: false,
      available: true,
    };
    PostApi(data)
      .then((data) => console.log(data))
      .then(() => refreshParkings());
  }

  function handleInputChange(event) {
    const max = Number(event.target.max);
    if (Number(event.target.value) > max) {
      event.target.value = max;
    }
  }

  return (
    <>
      <header>
        <h1>Create a new Parking</h1>
      </header>
      <main id="cmain">
        <form onSubmit={handleFormSubmit}>
          <label>
            Width
            <input
              name="width"
              type="number"
              step="0.1"
              max={7}
              min={1}
              required
              onChange={handleInputChange}
            />
          </label>
          <label>
            Large
            <input
              name="large"
              type="number"
              step="0.1"
              max={7}
              min={1}
              required
              onChange={handleInputChange}
            />
          </label>
          <label>
            <select name="category">
              <option value="compact">Compact</option>
              <option value="regular">Regular</option>
              <option value="big">Big</option>
            </select>
          </label>
          <button type="submit">Add Parking</button>
        </form>
      </main>
    </>
  );
}
