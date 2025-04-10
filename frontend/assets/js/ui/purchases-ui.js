import { getDataFromApi } from '../service.js';

let products = await getDataFromApi("products");

let getProductNameById = (products, productId) => {
    const matched = products.filter(p => p.id === productId);
    return matched.length > 0 ? matched[0].name : "Invalid";
}

let purchases = await getDataFromApi("purchases");

let purchaseRowContainer = document.getElementById('purchase-row-container');

let generatepurchasesUI = (purchases) => {
    purchaseRowContainer.replaceChildren("");
    purchases.forEach(element => {
        purchaseRowContainer.appendChild(generatepurchase(element));
    });
}
let generatepurchase = (purchase) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("purchase-item", "d-flex");

    const idDiv = document.createElement("div");
    idDiv.classList.add("id","w-20");
    const idP = document.createElement("p");
    idP.textContent = purchase.id;
    idDiv.appendChild(idP);
    itemContainer.appendChild(idDiv);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title","w-20");
    const titleP = document.createElement("p");
    titleP.textContent = getProductNameById(products, purchase.productId);
    titleDiv.appendChild(titleP);
    itemContainer.appendChild(titleDiv);

    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("stock","w-20");
    const quantityP = document.createElement("p");
    quantityP.textContent = purchase.quantityPurchased;
    quantityDiv.appendChild(quantityP);
    itemContainer.appendChild(quantityDiv);


    const soldDateDiv = document.createElement("div");
    soldDateDiv.classList.add("price","w-20");
    const soldDateP = document.createElement("p");
    soldDateP.textContent = purchase.purchaseDate;
    soldDateDiv.appendChild(soldDateP);
    itemContainer.appendChild(soldDateDiv);

    const buyerDiv = document.createElement("div");
    buyerDiv.classList.add("buyer","w-20");
    const buyerP = document.createElement("p");
    buyerP.textContent = purchase.supplier;
    buyerDiv.appendChild(buyerP);
    itemContainer.appendChild(buyerDiv);

    

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action","w-20");

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

function starterUI() {
    generatepurchasesUI(purchases);
}
starterUI();