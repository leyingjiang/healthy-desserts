/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* calories related choices  */
const fruitFBChoice = Array.from(document.getElementsByName("fruitFBChoice"));
const extraFBChoice = Array.from(document.getElementsByName("extraFBChoice"));
const flourCChoice = Array.from(document.getElementsByName("flourCChoice"));
const extraCChoice = Array.from(document.getElementsByName("extraCChoice"));
const beanBChoice = Array.from(document.getElementsByName("BeanBChoice"));
const extraBChoice = Array.from(document.getElementsByName("extraBChoice"));

const caloriesChoice = Array.from(fruitFBChoice, extraFBChoice, flourCChoice, extraCChoice, beanBChoice, extraBChoice);

/* inputs */
const performanceInput = document.querySelector("#performance");
const caloriesInput = document.querySelector("#calories");
const adviceInput = document.querySelector("#advice");
const recipeInput = document.querySelector("#recipe");

/* buttons add eventlistener */
caloriesChoice[0].addEventListener("change", applyCalories);
caloriesChoice[1].addEventListener("change",applyCalories);
caloriesChoice[2].addEventListener("change",applyCalories);
caloriesChoice[3].addEventListener("change",applyCalories);
caloriesChoice[4].addEventListener("change",applyCalories);
caloriesChoice[5].addEventListener("change",applyCalories);

/* functions */

function calculateTotal(currentCalories){
    caloriesInput.value= currentCalories + currentCalories;
}

function applyCalories(){
    let currentCalories = null;
    caloriesChoice.forEach((item) =>
    {
        if(item.checked){
            currentCalories = item.value;
        }
    });
    calculateTotal(currentCalories);
}

