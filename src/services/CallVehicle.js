export function CreateApiCars(data) {
  return fetch("https://parking-a-pi.vercel.app/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function DeleteApiCars(id) {
  return fetch(`https://parking-a-pi.vercel.app/cars/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
