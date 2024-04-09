import { useState } from "react";
import { useParkings } from "../hooks/useParkings";
import { useFilters } from "../hooks/useFilters";
import { Header } from "./Header";
import { CreateApiCars } from "../services/CallVehicle";

export function Sparking() {
  const [ifparking, setifparking] = useState(false);
  const [error, setError] = useState(false);
  const { parkings, setParkings, refreshParkings } = useParkings();
  const { FilterParkings } = useFilters();

  const filteredParkings = FilterParkings(parkings);
  function handleSelectParking(event) {
    event.preventDefault();

    const selectedParking = filteredParkings.find(
      (parking) => parking.selected
    );
    console.log(selectedParking);
    if (selectedParking.unavailableSize === true) {
      setError(true);
      console.log("Parking not available");
      return;
    } else {
      setError(false);
      const element = {
        category: selectedParking.category,
        parking: selectedParking.id,
      };
      CreateApiCars(element)
        .then((data) => console.log(data))
        .then(() => refreshParkings())
        .then(() => setifparking(false));
    }
  }

  const toggleButton = (id) => {
    const park = filteredParkings.find((parking) => parking.id === id);

    if (park.selected) {
      console.log("hola");
      setifparking(false);
      setParkings((parkings) =>
        parkings.map((parking) =>
          parking.id === id
            ? { ...parking, available: false, selected: false }
            : parking
        )
      );
      return;
    }
    console.log("hola");
    setParkings((parkings) =>
      parkings.map((parking) =>
        parking.id === id
          ? { ...parking, available: !parking.available }
          : parking
      )
    );
  };

  const toggleClick = (id) => {
    const parkingava = filteredParkings.find((parking) => parking.id === id);

    if (parkingava.occupied === true) return;
    if (parkingava.available === false) return;
    if (parkingava.unavailableSize === true) return;
    setParkings((parkings) =>
      parkings.map((parking) =>
        parking.id === id
          ? { ...parking, selected: !parking.selected }
          : { ...parking, selected: false }
      )
    );
    const selectedParking = parkings.find(
      (parking) => parking.selected === true
    );
    if (selectedParking?.id === id) {
      setifparking(false);
    } else {
      setifparking(true);
    }
  };

  return (
    <>
      <Header
        error={error}
        userparking={ifparking}
        setuserparking={setifparking}
        handleSelectParking={handleSelectParking}
      ></Header>
      <main id="Smain">
        {filteredParkings.map((parking, index) => {
          const color = () => {
            if (parking.occupied) return "red";
            if (parking.available === false) return "gray";
            if (parking.unavailableSize === true) return "blue";
            if (parking.selected) return "yellow";
            return "white";
          };

          return (
            <div className="Block" key={index} style={{ background: color() }}>
              <p className="block_0">id:{parking.id}</p>
              <p
                className="block_1"
                onClick={() => {
                  toggleClick(parking.id);
                }}
              >
                Width: {parking.width}
              </p>
              <p
                className="block_2"
                onClick={() => {
                  toggleClick(parking.id);
                }}
              >
                Large: {parking.large}
              </p>
              <p
                className="block_3"
                onClick={() => {
                  toggleClick(parking.id);
                }}
              >
                Occupied: {parking.occupied ? "Yes" : "No"}
              </p>
              <button
                className="block_4"
                onClick={() => {
                  toggleButton(parking.id);
                }}
              >
                -
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
}
