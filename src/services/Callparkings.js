export async function GetApi() {
  const response = await fetch("https://parking-a-pi.vercel.app/parkings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  const order = data.sort((a, b) => a.id - b.id);
  return order;
}
export async function PostApi(data) {
  const response = await fetch("https://parking-a-pi.vercel.app/parkings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

export async function PatchApi({ data, id }) {
  const response = await fetch(
    `https://parking-a-pi.vercel.app/parkings${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
}

export async function DeleteApi(id) {
  const response = await fetch(
    `https://parking-a-pi.vercel.app/parkings/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
}
