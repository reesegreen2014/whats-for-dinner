var sides = ['Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
];

var letsCookButton = document.querySelector("#lets-cook")
var radioButtons = document.getElementsByName("looking_for")
var selectedMealText = document.querySelector(".selected-type-of-meal")

// event listeners
letsCookButton.addEventListener('click', displayRadioValue)


// functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function getRandomDish (dishArray) {
    var randomIndex = getRandomIndex(dishArray)
    if (dishArray === sides) {
        return sides[randomIndex];
    } else if (dishArray === mains) {
        return mains[randomIndex];
    } else if (dishArray === desserts) {
        return desserts[randomIndex];
    }
    return dishArray[randomIndex]
}



function displayRadioValue(event) {
    event.preventDefault();
    var selectedCategory; 
    for (i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedCategory = radioButtons[i].value; 
        }
    }

    document.getElementById('cookpot-image').style.display = 'none';

    if (selectedCategory === "Entire Meal") {
        var side = getRandomDish(sides);
        var main = getRandomDish(mains);
        var dessert = getRandomDish(desserts);
        selectedMealText.innerHTML = `For your Main Dish, you should make ${main} with a side of ${side}. Then top it off with ${dessert}!`;
    } else {
 
        var dishArray;
        switch (selectedCategory) {
            case "Side":
                dishArray = sides;
                break;
            case "Main Dish":
                dishArray = mains;
                break;
        case "Dessert":
            dishArray = desserts;
            break;
        case "Entire Meal":
            break;
        default:
            break;
}
var selectedDish = getRandomDish(dishArray);
selectedMealText.innerHTML = selectedDish;
    } 
}