const button = document.getElementById("button");

button.addEventListener("click", function () {
  var urlRequest = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  fetch(urlRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const drinkName = data.drinks[0].strDrink;
      const drinkType = data.drinks[0].strCategory;
      const drinkAlcoholic = data.drinks[0].strAlcoholic;
      const thumbNail = data.drinks[0].strDrinkThumb;

      document.getElementById("drink-title").textContent = drinkName;
      document.getElementById("drink-type").textContent = drinkType;
      document.getElementById("drink-Alcoholic").textContent = drinkAlcoholic;
      document.getElementById("drinkIngredients").textContent =
        data.drinks[0].strIngredient1 +
        ", " +
        data.drinks[0].strIngredient2 +
        ", " +
        data.drinks[0].strIngredient3;
      document.getElementById("img").src = thumbNail;

      thumbNail.style.width = "333px";
      thumbNail.style.width = "233px";
      thumbNail.style.borderRadius = "10px";
    });
});
