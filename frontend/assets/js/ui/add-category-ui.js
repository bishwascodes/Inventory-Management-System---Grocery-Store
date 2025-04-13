import { sendCategoryToApi, getDataFromApi } from "../service.js";

let categories = await getDataFromApi("categories");

let addCatForm = document.getElementById("add-category");

let catTitle = document.getElementById("cat-name");
let catDesc = document.getElementById("cat-desc");

let formFields = [
    catTitle,
    catDesc
];

formFields.forEach((item) => {
    item.addEventListener("input", (e) => {
        e.target.classList.remove("border", "border-danger");
    })
})
addCatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let invalidFields = [];
    if (!catTitle.value) {
        invalidFields.push(productTitle);
    }
    if (!catDesc.value) {
        invalidFields.push(productCat);
    }

    if (invalidFields.length > 0) {
        invalidFields.forEach((item) => {
            item.classList.add("border", "border-danger");
        })
        invalidFields = [];
    } else {
        // success
        let idOriginal = categories[categories.length - 1].id;
        let lastTwo = parseInt(idOriginal.slice(-2)) + 1 ;
        const firstPart = idOriginal.slice(0, -2);
        let idNew = firstPart + lastTwo;
        const newProduct = {
            Id: idNew,
            Name: catTitle.value.trim(),
            Description: catDesc.value.trim()
        };

        const response = await sendCategoryToApi(newProduct);

        if (response.ok) {
            alert("Category added successfully!");
            addCatForm.reset();
        } else {
            alert("Failed to add Category.");
        }


    }
})