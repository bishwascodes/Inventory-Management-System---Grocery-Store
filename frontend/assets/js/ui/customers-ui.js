import { getDataFromApi } from '../service.js';

let customers = await getDataFromApi("customers");

let customerRowContainer = document.getElementById('customer-row-container');

let searchBox = document.getElementById("search");
searchBox.addEventListener("input", (e) => searchCustomers(e));

let searchCustomers = (e) => {
    let searchVal = e.target.value.trim().toLowerCase();
    if (searchVal == "") {
        generatecustomersUI(customers);
    } else {
        let filteredCustomers = customers.filter(customer => {
            return (
                customer.id.toLowerCase().includes(searchVal) ||
                customer.name.includes(searchVal) ||
                customer.phone.toLowerCase().includes(searchVal) ||
                customer.email.toLowerCase().includes(searchVal) ||
                customer.address.toLowerCase().includes(searchVal)
            );
        });
        generatecustomersUI(filteredCustomers);
    }
}


let generatecustomersUI = (customers) => {
    customerRowContainer.replaceChildren("");
    customers.forEach(element => {
        customerRowContainer.appendChild(generatecustomer(element));
    });
}
let generatecustomer = (customer) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("customer-item", "d-flex");

    const idDiv = document.createElement("div");
    idDiv.classList.add("customer-id", "w-10");
    const idP = document.createElement("p");
    idP.textContent = customer.id;
    idDiv.appendChild(idP);
    itemContainer.appendChild(idDiv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("customer-name", "w-20");
    const nameP = document.createElement("p");
    nameP.textContent = customer.name;
    nameDiv.appendChild(nameP);
    itemContainer.appendChild(nameDiv);

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone", "w-20");
    const phoneP = document.createElement("p");
    phoneP.textContent = customer.phone;
    phoneDiv.appendChild(phoneP);
    itemContainer.appendChild(phoneDiv);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email", "w-30");
    const emailP = document.createElement("p");
    emailP.textContent = customer.email;
    emailDiv.appendChild(emailP);
    itemContainer.appendChild(emailDiv);

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action", "w-20");

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
    generatecustomersUI(customers);
}
starterUI();