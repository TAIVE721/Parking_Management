import { GetApi } from "./src/services/Callparkings.js";

GetApi().then((data) => {
  console.log(data);
});
