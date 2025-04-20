import { getDataFromApi } from '../service.js';

let suppliers = await getDataFromApi("suppliers");

let supplierRowContainer = document.getElementById('supplier-row-container');

let searchBox = document.getElementById("search");
searchBox.addEventListener("input", (e) => searchSuppliers(e));

let searchSuppliers = (e) => {
    let searchVal = e.target.value.trim().toLowerCase();
    if (searchVal == "") {
        generateSuppliersUI(suppliers);
    } else {
        let filteredSuppliers = suppliers.filter(supplier => {
            return (
                supplier.id.toLowerCase().includes(searchVal) ||
                supplier.name.includes(searchVal) ||
                supplier.phone.includes(searchVal) ||
                supplier.contactPerson.toLowerCase().includes(searchVal) ||
                supplier.email.toLowerCase().includes(searchVal) ||
                supplier.address.toLowerCase().includes(searchVal) ||
                supplier.productsSupplied.join(",").toLowerCase().includes(searchVal)
            );
        });
        generateSuppliersUI(filteredSuppliers);
    }
}


let generateSuppliersUI = (suppliers) => {
    supplierRowContainer.replaceChildren("");
    suppliers.forEach(element => {
        supplierRowContainer.appendChild(generateSupplier(element));
    });
}
let generateSupplier = (supplier) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("supplier-item", "d-flex");


    const nameDiv = document.createElement("div");
    nameDiv.classList.add("supplier-name", "w-20");
    const nameP = document.createElement("p");
    nameP.textContent = supplier.name;
    nameDiv.appendChild(nameP);
    itemContainer.appendChild(nameDiv);

    const contactPersonDiv = document.createElement("div");
    contactPersonDiv.classList.add("contact-person", "w-20");
    const contactPersonP = document.createElement("p");
    contactPersonP.textContent = supplier.contactPerson;
    contactPersonDiv.appendChild(contactPersonP);
    itemContainer.appendChild(contactPersonDiv);

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone", "w-20");
    const phoneP = document.createElement("p");
    phoneP.textContent = supplier.phone;
    phoneDiv.appendChild(phoneP);
    itemContainer.appendChild(phoneDiv);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email", "w-30");
    const emailP = document.createElement("p");
    emailP.textContent = supplier.email;
    emailDiv.appendChild(emailP);
    itemContainer.appendChild(emailDiv);


    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action", "w-10");

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
    generateSuppliersUI(suppliers);
}
starterUI();