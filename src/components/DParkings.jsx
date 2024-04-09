import { useParkings } from "../hooks/useParkings";
import { DeleteApi } from "../services/Callparkings";

export function Dparking() {
  const { parkings, refreshParkings } = useParkings();

  const toogleButton = (id) => {
    DeleteApi(id)
      .then((data) => console.log(data))
      .then(() => refreshParkings());
  };

  return (
    <>
      <header>
        <h1>Delete a parking</h1>
      </header>
      <main id="Smain">
        {parkings.map((parking, index) => (
          <div className="Block" key={index}>
            <p className="block_0">id:{parking.id}</p>
            <p className="block_1">Width: {parking.width}</p>
            <p className="block_2">Large: {parking.large}</p>
            <p className="block_3">
              Occupied: {parking.occupied ? "Yes" : "No"}
            </p>
            <button
              onClick={() => {
                toogleButton(parking.id);
              }}
              className="block_4"
            >
              -
            </button>
          </div>
        ))}
      </main>
    </>
  );
}
