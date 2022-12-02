/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* calories related choices  */
const fruitChoiceFB = Array.from(document.getElementsByName("fruit-choice-fb"));
const extraChoiceFB = Array.from(document.getElementsByName("extra-choice-fb"));
const flourChoiceC = Array.from(document.getElementsByName("flour-choice-c"));
const extraChoiceC = Array.from(document.getElementsByName("extra-choice-c"));
const beanChoiceB = Array.from(document.getElementsByName("bean-choice-b"));
const extraChoiceB = Array.from(document.getElementsByName("extra-choice-c"));

const FirstChoice = Array.from(fruitChoiceFB, flourChoiceC, beanChoiceB);
const SecondChoice = Array.from(extraChoiceFB, extraChoiceC, extraChoiceB);

/* inputs */
const performanceInput = document.querySelector("#performance");
const caloriesInput = document.querySelector("#calories");

/* buttons add eventlistener */
FirstChoice[0].addEventListener("change", getFirstChoice);
FirstChoice[1].addEventListener("change",getFirstChoice);
FirstChoice[2].addEventListener("change",getFirstChoice);
FirstChoice[3].addEventListener("change",getFirstChoice);
FirstChoice[4].addEventListener("change",getFirstChoice);
FirstChoice[5].addEventListener("change",getFirstChoice);
SecondChoice[0].addEventListener("change",getSecondChoice);
SecondChoice[1].addEventListener("change",getSecondChoice);
SecondChoice[2].addEventListener("change",getSecondChoice);
SecondChoice[3].addEventListener("change",getSecondChoice);
SecondChoice[4].addEventListener("change",getSecondChoice);
SecondChoice[5].addEventListener("change",getSecondChoice);

/* functions */

function getFirstChoice() {
    for(var i=0; i< FirstChoice.length;i++){
        if(FirstChoice[i].checked){
            FirstCalories += FirstChoice[i].value;
        }
    }
    return FirstCalories;
}

function getSecondChoice() {
    for(var i=0; i<SecondChoice.length;i++){
        if(SecondChoice[i].checked){
            SecondCalories += SecondChoice[i].value;
        }
        return SecondCalories;
    }

}

function getTotalCalories() {
    caloriesInput = getFirstChoice() + getSecondChoice();
}






