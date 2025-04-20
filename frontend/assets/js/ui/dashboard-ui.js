import { getDataFromApi } from '../service.js';

let products = await getDataFromApi("products");
let sales = await getDataFromApi("sales");
let purchases = await getDataFromApi("purchases");

let totalProducts = document.getElementById("totalProducts");
totalProducts.textContent = products.length;

let totalSales = document.getElementById("totalSales");
totalSales.textContent = sales.length;

let totalPurchases = document.getElementById("totalPurchases");
totalPurchases.textContent = purchases.length;

// For Low Stocks and Expiration
const lowStockLimit = 10;
const expirayDaysLimit = 14;

const today = new Date();

const lowStockProducts = products.filter(product => product.quantity <= lowStockLimit);

const expiringOrExpiredProducts = products.filter(product => {
    if (!product.expiryDate) return false; //not expirable
    const expiryDate = new Date(product.expiryDate.split("T")[0]);
    const timeDifference = expiryDate - today; 
    const daysUntilExpiry = timeDifference / (1000 * 60 * 60 * 24);

    return daysUntilExpiry <= expirayDaysLimit;
}).sort((a, b) => {
    const dateA = new Date(a.expiryDate.split("T")[0]);
    const dateB = new Date(b.expiryDate.split("T")[0]);
    return dateA - dateB; // earlier expiry comes first
});

const lowStockSection = document.getElementById("low-stock-section");
const lowStockList = document.getElementById("low-stock-list");

let generateLowStockCard = (product) => {
    const item = document.createElement("div");
    item.className = "col-md-4";

    const card = document.createElement("div");
    card.className = "low-stock-card";

    const link = document.createElement("a");
    link.setAttribute("href", `./view-product.html?id=${product.id}`);

    card.appendChild(link);

    const title = document.createElement("h5");
    title.textContent = product.name;

    const category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;

    const quantity = document.createElement("p");
    quantity.innerHTML = `Stock Left: <span class="badge">${product.quantity} ${product.unit}</span>`;

    const supplier = document.createElement("p");
    supplier.textContent = `Supplier: ${product.supplier}`;

    link.appendChild(title);
    link.appendChild(category);
    link.appendChild(quantity);
    link.appendChild(supplier);
    item.appendChild(card);
    return item;
}

// low stock items showing
if (lowStockProducts.length > 0) {
    lowStockProducts.forEach(p => {
        const card = generateLowStockCard(p);
        lowStockList.appendChild(card);
    });
    lowStockSection.classList.remove("d-none");
}

// expiring/ed section
const expirySection = document.getElementById("expiring-soon-section");
const expiryList = document.getElementById("expiring-soon-list");

let generateExpiringCard = (product) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = document.createElement("div");
    card.className = "expiring-card";

    const link = document.createElement("a");
    link.setAttribute("href", `./view-product.html?id=${product.id}`);

    card.appendChild(link);

    const title = document.createElement("h5");
    title.textContent = product.name;

    const category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;

    const expiry = document.createElement("p");
    const formattedDate = product.expiryDate?.split("T")[0] || "N/A";
    expiry.innerHTML = `Expires/ed on: <span class="badge">${formattedDate}</span>`;

    const supplier = document.createElement("p");
    supplier.textContent = `Supplier: ${product.supplier}`;

    link.appendChild(title);
    link.appendChild(category);
    link.appendChild(expiry);
    link.appendChild(supplier);
    col.appendChild(card);
    return col;
}

// generating the UI
if (expiringOrExpiredProducts.length > 0) {
    expiringOrExpiredProducts.forEach(p => {
        const card = generateExpiringCard(p);
        expiryList.appendChild(card);
    });
    expirySection.classList.remove("d-none");
}

