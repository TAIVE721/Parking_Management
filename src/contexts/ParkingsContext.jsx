import { createContext, useState } from "react";

export const ParkingsContext = createContext();

export function ParkingsProvider({ children }) {
  const [parkings, setParkings] = useState([]);

  return (
    <ParkingsContext.Provider value={{ parkings, setParkings }}>
      {children}
    </ParkingsContext.Provider>
  );
}
