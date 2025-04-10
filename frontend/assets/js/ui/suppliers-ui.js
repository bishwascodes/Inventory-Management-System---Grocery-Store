import { getDataFromApi } from '../service.js';

let suppliers = await getDataFromApi("suppliers");

let supplierRowContainer = document.getElementById('supplier-row-container');

let generateSuppliersUI = (suppliers) => {
    supplierRowContainer.replaceChildren("");
    suppliers.forEach(element => {
        supplierRowContainer.appendChild(generateSupplier(element));
    });
}
let generateSupplier = (supplier) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("supplier-item", "d-flex");

    const idDiv = document.createElement("div");
    idDiv.classList.add("supplier-id","w-10");
    const idP = document.createElement("p");
    idP.textContent = supplier.id;
    idDiv.appendChild(idP);
    itemContainer.appendChild(idDiv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("supplier-name", "w-10");
    const nameP = document.createElement("p");
    nameP.textContent = supplier.name;
    nameDiv.appendChild(nameP);
    itemContainer.appendChild(nameDiv);

    const contactPersonDiv = document.createElement("div");
    contactPersonDiv.classList.add("contact-person", "w-10");
    const contactPersonP = document.createElement("p");
    contactPersonP.textContent = supplier.contactPerson;
    contactPersonDiv.appendChild(contactPersonP);
    itemContainer.appendChild(contactPersonDiv);

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone", "w-10");
    const phoneP = document.createElement("p");
    phoneP.textContent = supplier.phone;
    phoneDiv.appendChild(phoneP);
    itemContainer.appendChild(phoneDiv);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email","w-20");
    const emailP = document.createElement("p");
    emailP.textContent = supplier.email;
    emailDiv.appendChild(emailP);
    itemContainer.appendChild(emailDiv);

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address", "w-20");
    const addressP = document.createElement("p");
    addressP.textContent = supplier.address;
    addressDiv.appendChild(addressP);
    itemContainer.appendChild(addressDiv);

    const productsSuppliedDiv = document.createElement("div");
    productsSuppliedDiv.classList.add("join-date", "w-10");
    const productsSuppliedP = document.createElement("p");
    productsSuppliedP.textContent = supplier.productsSupplied.join(", ");
    productsSuppliedDiv.appendChild(productsSuppliedP);
    itemContainer.appendChild(productsSuppliedDiv);

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

function starterUI(){
    generateSuppliersUI(suppliers);
}
starterUI();