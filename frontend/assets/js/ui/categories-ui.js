import { getDataFromApi } from '../service.js';

let categories = await getDataFromApi("categories");

let categoryRowContainer = document.getElementById('category-row-container');

let searchBox = document.getElementById("search");
searchBox.addEventListener("input", (e) => searchCats(e));

let searchCats = (e) => {
    let searchVal = e.target.value.trim().toLowerCase();
    if (searchVal == "") {
        generateCategoriesUI(categories);
    } else {
        let filteredCats = categories.filter(cat => {
            return (
                cat.name.toLowerCase().includes(searchVal) ||
                cat.id.toLowerCase().includes(searchVal) ||
                cat.description.toLowerCase().includes(searchVal)
            );
        });
        generateCategoriesUI(filteredCats);
    }
}

let generateCategoriesUI = (categories) => {
    categoryRowContainer.replaceChildren("");
    categories.forEach(element => {
        categoryRowContainer.appendChild(generateCategory(element));
    });
}
let generateCategory = (category) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("category-item", "d-flex");

    const idDiv = document.createElement("div");
    idDiv.classList.add("id","w-10");
    const idP = document.createElement("p");
    idP.textContent = category.id;
    idDiv.appendChild(idP);
    itemContainer.appendChild(idDiv);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title","w-20");
    const titleP = document.createElement("p");
    titleP.textContent = category.name;
    titleDiv.appendChild(titleP);
    itemContainer.appendChild(titleDiv);


    const descDiv = document.createElement("div");
    descDiv.classList.add("description","w-50");
    const priceP = document.createElement("p");
    priceP.textContent = category.description;
    descDiv.appendChild(priceP);
    itemContainer.appendChild(descDiv);

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action","w-20");

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
    generateCategoriesUI(categories);
}
starterUI();