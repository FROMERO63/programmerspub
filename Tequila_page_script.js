const urlRequest =
  "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila";

fetch(urlRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const nameCell = document.getElementById("drinkName");
    const img = document.getElementById("img");

    nameCell.textContent = data.drinks[15].strDrink;
    img.src = data.drinks[15].strDrinkThumb;
    img.style.width = "333px";
    img.style.height = "233px";
    img.style.borderRadius = "10px";
    /*-------------------------------------------------------------*/

    const namecell2 = document.getElementById("drinkName2");

    const img2 = document.getElementById("img_2");

    namecell2.textContent = data.drinks[6].strDrink;
    img2.src = data.drinks[6].strDrinkThumb;
    img2.style.width = "333px";
    img2.style.height = "233px";
    img2.style.borderRadius = "10px";
    /*------------------------------------------------------------*/
    const namecell3 = document.getElementById("drinkName3");

    const img3 = document.getElementById("img_3");

    namecell3.textContent = data.drinks[23].strDrink;
    img3.src = data.drinks[23].strDrinkThumb;
    img3.style.width = "333px";
    img3.style.height = "233px";
    img3.style.borderRadius = "10px";

    const namecell4 = document.getElementById("drinkName4");

    const img4 = document.getElementById("img_4");

    namecell4.textContent = data.drinks[2].strDrink;
    img4.src = data.drinks[2].strDrinkThumb;
    img4.style.width = "333px";
    img4.style.height = "233px";
    img4.style.borderRadius = "10px";
    4;
  });
const secUrlRequest =
  "https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=17253";

fetch(secUrlRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const ingredient1 = document.getElementById("ingredient1_1");
    const ingredient2 = document.getElementById("ingredient2_1");
    const ingredient3 = document.getElementById("ingredient3_1");
    const ingredient4 = document.getElementById("ingredient4_1");

    ingredient1.textContent = data.drinks[0].strIngredient1;
    ingredient2.textContent = data.drinks[0].strIngredient2;
  });
/*----------------------------------------------*/
const thirdUrlRequest =
  "https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=11118";
fetch(thirdUrlRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const ingredient1 = document.getElementById("ingredient1_2");
    const ingredient2 = document.getElementById("ingredient2_2");
    const ingredient3 = document.getElementById("ingredient3_2");
    const ingredient4 = document.getElementById("ingredient4_2");
    const ingredient5 = document.getElementById("ingredient5_2");

    const meas1 = document.getElementById("meas1_2");
    const meas2 = document.getElementById("meas2_2");
    const meas3 = document.getElementById("meas3_2");
    const meas4 = document.getElementById("meas4_2");
    const meas5 = document.getElementById("meas5_2");

    meas1.textContent = data.drinks[0].strMeasure1;
    meas2.textContent = data.drinks[0].strMeasure2;
    meas3.textContent = data.drinks[0].strMeasure2;

    ingredient1.textContent = data.drinks[0].strIngredient1;
    ingredient2.textContent = data.drinks[0].strIngredient2;
    ingredient3.textContent = data.drinks[0].strIngredient3;
    ingredient4.textContent = data.drinks[0].strIngredient4;
    ingredient5.textContent = data.drinks[0].strIngredient5;
  });
const fourthUrlRequest =
  "https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=13621";
fetch(fourthUrlRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const ingredient1 = document.getElementById("ingredient1_3");
    const ingredient2 = document.getElementById("ingredient2_3");
    const ingredient3 = document.getElementById("ingredient3_3");
    const ingredient4 = document.getElementById("ingredient4_3");
    const ingredient5 = document.getElementById("ingredient5_3");

    const meas1 = document.getElementById("meas1_3");
    const meas2 = document.getElementById("meas2_3");
    const meas3 = document.getElementById("meas3_3");
    const meas4 = document.getElementById("meas4_3");
    const meas5 = document.getElementById("meas5_3");

    meas1.textContent = data.drinks[0].strMeasure1;
    meas2.textContent = data.drinks[0].strMeasure2;
    meas3.textContent = data.drinks[0].strMeasure2;

    ingredient1.textContent = data.drinks[0].strIngredient1;
    ingredient2.textContent = data.drinks[0].strIngredient2;
    ingredient3.textContent = data.drinks[0].strIngredient3;
    ingredient4.textContent = data.drinks[0].strIngredient4;
    ingredient5.textContent = data.drinks[0].strIngredient5;
  });
const fifthUrlRequest =
  "https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=16333";
fetch(fifthUrlRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const ingredient1 = document.getElementById("ingredient1_4");
    const ingredient2 = document.getElementById("ingredient2_4");
    const ingredient3 = document.getElementById("ingredient3_4");
    const ingredient4 = document.getElementById("ingredient4_4");
    const ingredient5 = document.getElementById("ingredient5_4");
    const ingredient6 = document.getElementById("ingredient6_4");
    const ingredient7 = document.getElementById("ingredient7_4");
    const ingredient8 = document.getElementById("ingredient8_4");

    const meas1 = document.getElementById("meas1_4");
    const meas2 = document.getElementById("meas2_4");
    const meas3 = document.getElementById("meas3_4");
    const meas4 = document.getElementById("meas4_4");
    const meas5 = document.getElementById("meas5_4");
    const meas6 = document.getElementById("meas6_4");
    const meas7 = document.getElementById("meas7_4");
    const meas8 = document.getElementById("meas8_4");

    meas1.textContent = data.drinks[0].strMeasure1;
    meas2.textContent = data.drinks[0].strMeasure2;
    meas3.textContent = data.drinks[0].strMeasure2;
    meas4.textContent = data.drinks[0].strMeasure2;
    meas5.textContent = data.drinks[0].strMeasure2;

    ingredient1.textContent = data.drinks[0].strIngredient1;
    ingredient2.textContent = data.drinks[0].strIngredient2;
    ingredient3.textContent = data.drinks[0].strIngredient3;
    ingredient4.textContent = data.drinks[0].strIngredient4;
    ingredient5.textContent = data.drinks[0].strIngredient5;
    ingredient6.textContent = data.drinks[0].strIngredient6;
    ingredient7.textContent = data.drinks[0].strIngredient7;
    ingredient8.textContent = data.drinks[0].strIngredient8;
  });
