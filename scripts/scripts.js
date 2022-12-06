/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const dessertChoices = Array.from(document.getElementsByName('dessert-choices'));
const flourChoices = Array.from(document.getElementsByName('flour-choices'));
const milkChoices = Array.from(document.getElementsByName('milk-choices'));
const sugarChoices = Array.from(document.getElementsByName('sugar-choices'));
const syrupChoices = Array.from(document.getElementsByName('syrup-choices'));
const fruitChoices = Array.from(document.getElementsByName('fruit-choices'));
const btn = document.getElementById('resultBtn');

btn.addEventListener('click', getDessertAnswers);

function getDessertAnswers() {
  let userChoices = [];
  dessertChoices.forEach(choice => {
    if (choice.checked) {
      console.log(choice.value);
      userChoices.push(choice.value);
    }
  });
  flourChoices.forEach(choice =>{
    if (choice.checked){
      console.log(choice.value);
      userChoices.push(choice.value);
    }
  });
  milkChoices.forEach(choice => {
    if(choice.checked) {
      console.log(choice.value);
      userChoices.push(choice.value);
      }
  });
  sugarChoices.forEach(choice => {
    if (choice.checked) {
      console.log(choice.value);
      userChoices.push(choice.value);
    }
  });
  syrupChoices.forEach(choice => {
    if(choice.checked) {
      console.log(choice.value);
      userChoices.push(choice.value);
      }
  });
  fruitChoices.forEach(choice => {
    if (choice.checked) {
      console.log(choice.value);
      userChoices.push(choice.value);
    }
  });
  let totalCalories = null;
  totalCalories = userChoices[1].value + userChoices[2].value + userChoices[3].value + userChoices[4].value + userChoices[5];
  console.log(totalCalories);
  printData("Dear Player, the dessert you made: " + userChoices[0] + " contains the total calories of " + totalCalories ". Thank you for your participation!", btn);
}

function printData(message,destination){
  destination.value = message;
}




/*let totalCalories = null;
userChoices.forEach(choice =>{
  if(choice.value === "fruit-bowl"){
    totalCalories = (fruitFBCalories + extraFBCalories);
  }
  if (choice.value === "cookie"){
    totalCalories = (flourCCalories + extraCCalories);
  }
  if (choice.value === "brownie"){
    totalCalories = (beanBCalories + extraBCalories);
  }
});

/* buttons add eventlistener 
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
*/
/* functions 

function getFirstChoice() {
    let firstCalories = null;
    FirstChoice.forEach((item) => {
        if (item.checked){
            firstCalories = item.value;
            console.log(firstCalories);
        }
    });
    getTotalCalories(firstCalories);
}

function getSecondChoice(){
    let secondCalories = null;
    SecondChoice.forEach((item) => {
        if (item.checked){
            seconfCalories = item.value;
        }};
        getTotalCalories(secondCalories);
    )
}

function getTotalCalories(firstCalories, secondCalories) {
    caloriesInput.value = firstCalories + secondCalories;
}

*/


const questions = [
    {
      id: 'slug-1',
      name: 'FruitBowl1',
      fruitCombo: '1 cup blueberries, 1 cup sliced kiwi, 1 cup green grapes, 1 cup watermelon',
      addOn: '1 spoon cream & 1 spoon honey',
      recommendation1: 'Berries especially raspberries, peaches, lemon, coconut, watermelon, oranges, etc. are low calories fruits. Filling your fruit bowl with these fruits to consume fewer calories and make it healthier!',
      recommendation2: 'Honey offers antidepressants, anticonvulsant, and antianxiety benefits. However, consuming too much may cause adverse effects due to its high sugar and calorie content. Cream comes from saturated fat, and consuming too much saturated fat increases the risk of high cholesterol.',
      recommendation3:'Greek yogurt is a protein-rich dairy product that is low in fat, carbohydrates, calories, and sugar. It provides a thicker and creamier texture to your fruit bowl since the liquid whey is strained out and makes you fell full for longer.',
      recipe: '1/2 watermelon, 1/2 melon cantaloupe, 1/4 pineapple, 1/2 peach, 1/2 pear, 150g strawberries, 30g coconut flesh, 3/4 cup nonfat greek yogurt, optional: 1-2 tablespoons granola'
    },
    {
      id:'slug-2',
      name:'FruitBowl2',
      fruitCombo:'1 cup blueberries, 1 cup sliced kiwi, 1 cup green grapes, 1 cup watermelon',
      addOn: '2 spoon nonfat greek yogurt',
      recommendation1: 'Berries especially raspberries, peaches, lemon, coconut, watermelon, oranges, etc. are low calories fruits. Filling your fruit bowl with these fruits to consume fewer calories and make it healthier!',
      recommendation2: 'Greek yogurt is a protein-rich dairy product that is low in fat, carbohydrates, calories, and sugar. It provides a thicker and creamier texture to your fruit bowl since the liquid whey is strained out and makes you fell full for longer.',
      recipe: '1/2 watermelon, 1/2 melon cantaloupe, 1/4 pineapple, 1/2 peach, 1/2 pear, 150g strawberries, 30g coconut flesh, 3/4 cup nonfat greek yogurt, optional: 1-2 tablespoons granola'    
    },
    {
      id:'slug-3',
      name:'FruitBowl3',
      fruitCombo: '1 cup strawberries, 2 sliced bananas, 2 cup dried fruits',
      addOn: '1 spoon cream & 1 spoon honey',
      recommendation1: 'Berries especially raspberries, peaches, lemon, coconut, watermelon, oranges, etc. are low calories fruits. Filling your fruit bowl with these fruits to consume fewer calories and make it healthier!',
      recommendation2:'Fruits like apples, grapes, pineapples, cherries, figs, bananas, etc. are high in calories, so consuming less of these will be a good thing.',
      recommendation3: 'Honey offers antidepressants, anticonvulsant, and antianxiety benefits. However, consuming too much may cause adverse effects due to its high sugar and calorie content. Cream comes from saturated fat, and consuming too much saturated fat increases the risk of high cholesterol.',
      recommendation4:'Greek yogurt is a protein-rich dairy product that is low in fat, carbohydrates, calories, and sugar. It provides a thicker and creamier texture to your fruit bowl since the liquid whey is strained out and makes you fell full for longer.',
      recipe: '1/2 watermelon, 1/2 melon cantaloupe, 1/4 pineapple, 1/2 peach, 1/2 pear, 150g strawberries, 30g coconut flesh, 3/4 cup nonfat greek yogurt, optional: 1-2 tablespoons granola'  
    },
    {
      id:'slug-4',
      name:'FruitBowl4',
      fruitCombo: '1 cup strawberries, 2 sliced bananas, 2 cup dried fruits',
      addOn: '2 spoon nonfat greek yogurt',
      recommendation1: 'Fruits like apples, grapes, pineapples, cherries, figs, bananas, etc. are high in calories, so consuming less of these will be a good thing.',
      recommendation2: 'Berries especially raspberries, peaches, lemon, coconut, watermelon, oranges, etc. are low calories fruits. Filling your fruit bowl with these fruits to consume fewer calories and make it healthier!',
      recommendation3: 'Greek yogurt is a protein-rich dairy product that is low in fat, carbohydrates, calories, and sugar. It provides a thicker and creamier texture to your fruit bowl since the liquid whey is strained out and makes you fell full for longer.'
    },
    {
      id:'slug-5',
      name: 'Cookie1',
      flourChoice: 'whole wheat flour',
      addOn: '2 extra spoon brown sugar',
      recommendation1: 'Whole wheat flour is healthier with high proteins, fibers, and a variety of vitamins and minerals, but low calories, compared to white flour',
      recommendation2: 'Brown sugar had fewer calories than white sugar and chocolate, and the molasses in it can boost metabolism. It also provides the perfect amount of sweetness and keeps the cookie moist',
      recipe:'1/4 cup coconut oil(no butter & no egg), 1/4 cup brown sugar(as applesauce and sugar), 1 tablespoon vanilla extras, whole wheat flour, 150g dark chocolate chips, optional: 20g cinnamon'
    },
    {
      id:'slug-6',
      name:"Cookie2",
      flourChoice: 'whole wheat flour',
      addOn:'2 extra spoon chocolate chips',
      recommendation1: 'Whole wheat flour is healthier with high proteins, fibers, and a variety of vitamins and minerals, but low calories, compared to white flour',
      recommendation2: 'Chocolate is high in sugar and saturated fat, it is a high-calorie food that will result in excess weight. Avoid adding too much chocolate to your cookie! If you really want more chocolate, use black chocolate',
      recommendation3: 'Brown sugar had fewer calories than white sugar and chocolate, and the molasses in it can boost metabolism. It also provides the perfect amount of sweetness and keeps the cookie moist',
      recipe:'1/4 cup coconut oil(no butter & no egg), 1/4 cup brown sugar(as applesauce and sugar), 1 tablespoon vanilla extras, whole wheat flour, 150g dark chocolate chips, optional: 20g cinnamon'
    },
    {
      id:'slug-7',
      name:'Cookie3',
      flourChoice:'white flour',
      addOn:'2 extra spoon of brown sugar',
      recommendation1: 'White flour is made with only the endosperm, so it had a low nutritional value',
      recommendation2: 'Whole wheat flour is healthier with high proteins, fibers, and a variety of vitamins and minerals, but low calories, compared to white flour',
      recommendation3: 'Brown sugar had fewer calories than white sugar and chocolate, and the molasses in it can boost metabolism. It also provides the perfect amount of sweetness and keeps the cookie moist',
      recipe:'1/4 cup coconut oil(no butter & no egg), 1/4 cup brown sugar(as applesauce and sugar), 1 tablespoon vanilla extras, whole wheat flour, 150g dark chocolate chips, optional: 20g cinnamon'
    },
    {
      id:'slug-8',
      name:'Cookie4',
      flourChoice:'white flour',
      addOn:'2 extra spoon of chocolate chips',
      recommendation1: 'White flour is made with only the endosperm, so it had a low nutritional value',
      recommendation2: 'Whole wheat flour is healthier with high proteins, fibers, and a variety of vitamins and minerals, but low calories, compared to white flour',
      recommendation3: 'Chocolate is high in sugar and saturated fat, it is a high-calorie food that will result in excess weight. Avoid adding too much chocolate to your cookie! If you really want more chocolate, use black chocolate',
      recommendation4: 'Brown sugar had fewer calories than white sugar and chocolate, and the molasses in it can boost metabolism. It also provides the perfect amount of sweetness and keeps the cookie moist',
      recipe:'1/4 cup coconut oil(no butter & no egg), 1/4 cup brown sugar(as applesauce and sugar), 1 tablespoon vanilla extras, whole wheat flour, 150g dark chocolate chips, optional: 20g cinnamon'
    },
    {
      id:'slug-9',
      name:'Brownie1',
      blackBean:'1.5 can',
      addOn:'1/2 cup cocoa powder',
      recommendation1: 'Black bean add a velvety, fudgy texture to your brownies without extra calories from fat an sugar. It is also an excellent source of protein, fiber, and quality carbohydrates',
      recommendation2:'Cocoa powder is an unsweetened chocolate product that can provide a similar rich flavor to chocolate with healthier nutritional value. using cocoa powder instead of chocolate helps to largely decrease the fat and calories of your brownies',
      recipe:'1 cup black beans, 3 tablespoons coconut oil/vegetable oil, 1/3 cup coconut sugar/brown sugar, 1/4 cup cocoa powder, 1/4 table spoon sea salt, 1/4 cup honey, 1/2 teaspoon baking powder'
    },
    {
      id:'slug-10',
      name:'Brownie2',
      blackBean: '1.5 can',
      addOn: '1/2 chocolate chips',
      recommendation1: 'Black bean add a velvety, fudgy texture to your brownies without extra calories from fat an sugar. It is also an excellent source of protein, fiber, and quality carbohydrates',
      recommendation2: 'When consuming chocolate in relatively high amounts, the high-calorie content of chocolate will probably cause weight gain and establish risk factors for hypertension, diabetes, dyslipidemia, and cardiovascular disease',
      recommendation3: 'Cocoa powder is an unsweetened chocolate product that can provide a similar rich flavor to chocolate with healthier nutritional value. using cocoa powder instead of chocolate helps to largely decrease the fat and calories of your brownies',
      recipe:'1 cup black beans, 3 tablespoons coconut oil/vegetable oil, 1/3 cup coconut sugar/brown sugar, 1/4 cup cocoa powder, 1/4 table spoon sea salt, 1/4 cup honey, 1/2 teaspoon baking powder'
    },
    {
      id:'slug-11',
      name:'Brownie3',
      blackBean: '1 can',
      addOn: '1/2 cocoa powder',
      recommendation1: 'Black beans are rich in antioxidants, which can protect the cells in your body and reduce your risk of conditions like heart disease and cancer. It provides you with the following vitamins and minerals: Vitamin A. Vitamin C.',
      recommendation2: 'Black bean add a velvety, fudgy texture to your brownies without extra calories from fat an sugar. It is also an excellent source of protein, fiber, and quality carbohydrates',
      recommendation3: 'Cocoa powder is an unsweetened chocolate product that can provide a similar rich flavor to chocolate with healthier nutritional value. using cocoa powder instead of chocolate helps to largely decrease the fat and calories of your brownies',
      recipe:'1 cup black beans, 3 tablespoons coconut oil/vegetable oil, 1/3 cup coconut sugar/brown sugar, 1/4 cup cocoa powder, 1/4 table spoon sea salt, 1/4 cup honey, 1/2 teaspoon baking powder'
    },
    {
      id:'slug-12',
      name: 'Brownie4',
      blackBean:'1 can',
      addOn: '1/2 chocolate chips',
      recommendation1: 'Black beans are rich in antioxidants, which can protect the cells in your body and reduce your risk of conditions like heart disease and cancer. It provides you with the following vitamins and minerals: Vitamin A. Vitamin C.',
      recommendation2: 'Black bean add a velvety, fudgy texture to your brownies without extra calories from fat an sugar. It is also an excellent source of protein, fiber, and quality carbohydrates',
      recommendation3: 'When consuming chocolate in relatively high amounts, the high-calorie content of chocolate will probably cause weight gain and establish risk factors for hypertension, diabetes, dyslipidemia, and cardiovascular disease',
      recommendation4: 'Cocoa powder is an unsweetened chocolate product that can provide a similar rich flavor to chocolate with healthier nutritional value. using cocoa powder instead of chocolate helps to largely decrease the fat and calories of your brownies',
      recipe:'1 cup black beans, 3 tablespoons coconut oil/vegetable oil, 1/3 cup coconut sugar/brown sugar, 1/4 cup cocoa powder, 1/4 table spoon sea salt, 1/4 cup honey, 1/2 teaspoon baking powder'
    },
  ];
  


  $(document).ready(function(){
    $('slide').slick({
      setting-name: setting-value
    });
  });