import { useState } from "react";
import { Footer } from "./components/Footer";
import { CreateParking } from "./components/CParking";
import { Sparking } from "./components/SParking";
import { Dparking } from "./components/DParkings";

function App() {
  const [Nav, setNav] = useState({
    sparking: true,
    cparking: false,
    dparking: false,
  });

  const handleClick = (event) => {
    setNav({
      sparking: false,
      cparking: false,
      dparking: false,
      [event.target.dataset.value]: true,
    });
  };

  return (
    <>
      <nav>
        <ul>
          <li data-value="sparking" onClick={handleClick}>
            Select Parking
          </li>
          <li data-value="cparking" onClick={handleClick}>
            Create Parking
          </li>
          <li data-value="dparking" onClick={handleClick}>
            Delete Parking
          </li>
        </ul>
      </nav>

      {Nav.sparking && <Sparking />}
      {Nav.cparking && <CreateParking></CreateParking>}

      {Nav.dparking && <Dparking />}

      <Footer></Footer>
    </>
  );
}

export default App;
