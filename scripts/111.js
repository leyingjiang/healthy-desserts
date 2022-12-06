
function getExtraFbCalories() {
    let extraFbCalories = [];
    extraChoiceFB.forEach(choice => {
        if(choice.checked) {
            console.log(choice.value);
            userChoices.push(choice.value)
        }
    })
}

function getExtraCCalories() {
    let extraCCalories = [];
    extraChoiceC.forEach(choice => {
        if(choice.checked) {
            console.log(choice.value);
            userChoices.push(choice.value)
        }
    })
}

function getExtraBCalories() {
    let extraBCalories = [];
    extraChoiceB.forEach(choice => {
        if(choice.checked) {
            console.log(choice.value);
            userCHoices.push(choice.value)
        }
    })
}