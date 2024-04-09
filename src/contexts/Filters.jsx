import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [Filters, setFilters] = useState({
    category: "all",
    width: "all",
    large: "all",
  });

  return (
    <FiltersContext.Provider value={{ Filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
