import { useContext } from "react";
import { FiltersContext } from "../contexts/Filters.jsx";

export function useFilters() {
  const { Filters, setFilters } = useContext(FiltersContext);

  const FilterParkings = (parkings) => {
    return parkings.map((parking) => {
      if (
        (Filters.category === "all" || parking.category === Filters.category) &&
        (Filters.width === "all" || parking.width >= Filters.width) &&
        (Filters.large === "all" || parking.large >= Filters.large)
      ) {
        return {
          ...parking,
          unavailableSize: false,
        };
      } else
        return {
          ...parking,
          unavailableSize: true,
        };
    });
  };

  return { Filters, setFilters, FilterParkings };
}
