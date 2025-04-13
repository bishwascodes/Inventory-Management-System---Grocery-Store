const apiAddress = "http://localhost:5090";

export const getDataFromApi = async (type) => {
  const response = await fetch(`${apiAddress}/${type}`, {
    method: "GET",
  });
  return response.json();
};


export const sendProductToApi = async (product) => {
  const response = await fetch(`${apiAddress}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response;
};

export const sendCategoryToApi = async (cat) => {
  const response = await fetch(`${apiAddress}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
  });
  return response;
};
