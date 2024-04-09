import { useContext, useEffect } from "react";
import { ParkingsContext } from "../contexts/ParkingsContext.jsx";
import { GetApi } from "../services/Callparkings.js";

export function useParkings() {
  const { parkings, setParkings } = useContext(ParkingsContext);

  const refreshParkings = async () => {
    GetApi().then((data) => {
      setParkings(data);
    });
  };

  useEffect(() => {
    refreshParkings();
  }, []);

  return { parkings: parkings, setParkings, refreshParkings };
}
