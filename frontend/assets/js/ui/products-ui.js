import { getDataFromApi } from '../service.js';

let products = await getDataFromApi("products");

let productRowContainer = document.getElementById('product-row-container');

let generateProductsUI = (products) => {
    productRowContainer.replaceChildren("");
    products.forEach(element => {
        productRowContainer.appendChild(generateProduct(element));
    });
}
let generateProduct = (product) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("product-item", "d-flex");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    const titleP = document.createElement("p");
    titleP.textContent = product.name;
    titleDiv.appendChild(titleP);
    itemContainer.appendChild(titleDiv);

    const idDiv = document.createElement("div");
    idDiv.classList.add("id");
    const idP = document.createElement("p");
    idP.textContent = product.id;
    idDiv.appendChild(idP);
    itemContainer.appendChild(idDiv);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    const priceP = document.createElement("p");
    priceP.textContent = product.sellingPrice;
    priceDiv.appendChild(priceP);
    itemContainer.appendChild(priceDiv);

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    const categoryP = document.createElement("p");
    categoryP.textContent = product.category;
    categoryDiv.appendChild(categoryP);
    itemContainer.appendChild(categoryDiv);

    const stockDiv = document.createElement("div");
    stockDiv.classList.add("stock");
    const stockP = document.createElement("p");
    stockP.textContent = product.quantity + product.unit;
    stockDiv.appendChild(stockP);
    itemContainer.appendChild(stockDiv);

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");

    const viewLink = document.createElement("a");
    viewLink.href = "#";
    const viewIcon = document.createElement("i");
    viewIcon.classList.add("fa-solid", "fa-eye");
    viewLink.appendChild(viewIcon);
    actionDiv.appendChild(viewLink);

    const editLink = document.createElement("a");
    editLink.href = "#";
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pencil");
    editLink.appendChild(editIcon);
    actionDiv.appendChild(editLink);

    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteLink.appendChild(deleteIcon);
    actionDiv.appendChild(deleteLink);

    itemContainer.appendChild(actionDiv);

    return itemContainer;
}

function starterUI(){
    generateProductsUI(products);
}
starterUI();