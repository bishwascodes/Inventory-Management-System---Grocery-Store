const apiAddress = "http://localhost:5090";

export const getDataFromApi = async (type) => {
    const response = await fetch(`${apiAddress}/${type}`, {
        method: "GET",
    });
    return response.json();
};


export const sendProductToApi = async (productId, name, category, quantity, unit, sp, pp, expiryDate, supplier) => {
    const body = {
      Id: productId,
      Name: name,
      Category: category,
      Quantity: quantity,
      Unit: unit,
      SellingPrice: sp,
      PurchasePrice: pp,
      ExpiryDate: expiryDate,
      Supplier: supplier,

    };
    await fetch(`${apiAddress}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };