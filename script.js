// Declare
const categoriesContainer = document.getElementById("categories-container");
const cardDiv = document.getElementById("card-div");
const cartDiv = document.getElementById("cart-div");



// categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => showCategories(data.categories))
        .catch((err) => alert("✖ failed"));
};

// Show categories
const showCategories = (categories) => {
    categoriesContainer.innerHTML = `
    <a id="all-trees" class="my-2 block pl-3 py-1 cursor-pointer hover:bg-green-700 hover:text-white ">All Trees</a>
  `;
    categories.forEach((cat) => {
        categoriesContainer.innerHTML += `
      <a id="${cat.id}" class="my-2 block pl-3 py-1 cursor-pointer hover:bg-green-700 hover:text-white">${cat.category_name}</a>
    `;
    });

    const allTrees = document.getElementById("all-trees");
    if (allTrees) {
        allTrees.classList.add("bg-green-700", "text-white");
    }
};

// loading all plants
const loadAllPlants = () => {
    showLoading();
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => showTreeCategories(data.plants))
        .catch((err) => alert("✖ failed"));
};

// category plants
const loadPlantsByCategory = (id) => {
    showLoading();
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then((res) => res.json())
        .then((data) => showTreeCategories(data.plants))
        .catch((err) => alert("✖ failed"));
};





