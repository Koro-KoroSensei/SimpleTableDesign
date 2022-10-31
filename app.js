//Catch Search Text use with API and Convert JSON
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    if (searchText == '') {
        alert("Please Enter a Food Name");
    }
    else {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        //Here Load Data
        fetch(url)
            .then(res => res.json())
            .then(data => displayFoods(data.meals));                      
    }    
}
//After Search Display Food Menu
const displayFoods = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    //After search New Food Clear old Ingredients Page
    const foodInfo = document.getElementById('food-detail');
    foodInfo.innerHTML = '';
    foods.forEach(food => {
        const foodNameDiv = document.createElement('div');
        foodNameDiv.innerHTML = `
            <div id="food-container">
                <div onclick="getIngredients('${food.idMeal}')" class="food-div">
                    <img class="food-image" src="${food.strMealThumb}">
                    <div>
                        <h6 style="text-align:center; padding-top:5px;">${food.strMeal}</h6>
                    </div>
                </div>
            </div>
        `
        foodContainer.appendChild(foodNameDiv);
    })   
}
//After Click Any Food for get Ingredients & Some info Use API
const getIngredients = (id) => {
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodDetails(data.meals[0]));
}
//Ingredients Function
const renderFoodDetails = food => {
    console.log(food);
    const foodInfo = document.getElementById('food-detail');
    foodInfo.innerHTML = `
      
}
  //Thank You
