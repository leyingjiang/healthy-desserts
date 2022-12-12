/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const questions = [
  {
    "question": "Choose the dessert you would like to make -",
    "answer1": "Chocolate Chip Cookie",
    "answer1Total": "1",
    "answer2": "Caramel Brownie",
    "answer2Total": "2",
    "answer3": "Pancake",
    "answer3Total": "3"
  },
  {
    "question": "Which type of flour do you like to use for the dessert -",
    "answer1": "White Flour",
    "answer1Total": "1",
    "answer2": "Oat Flour",
    "answer2Total": "2",
    "answer3": "Whole Wheat Flour",
    "answer3Total": "3"
  },
  {
    "question": "Which type of milk do you like to use for the dessert  -",
    "answer1": "Whole Milk",
    "answer1Total": "1",
    "answer2": "Oat Milk",
    "answer2Total": "2",
    "answer3":"Nonfat Milk",
    "answer3Total": "3"
  },
  {
    "question":
      "Which type of sugar do you want to add to the dessert -",
    "answer1": "Fine Granulated Sugar",
    "answer1Total": "1",
    "answer2": "Brown Sugar",
    "answer2Total": "2",
    "answer3": "Powdered Sugar",
    "answer3Total": "3"
  },
  {
    "question":
      "Which type of syrup do you want to Choose -",
    "answer1": "Malt Syrup",
    "answer1Total": "1",
    "answer2": "Honey",
    "answer2Total": "2",
    "answer3": "Maple Syrup",
    "answer3Total": "3"
  },
  {
    "question":
      "Which type of fruit cup would you like to add as the side - ",
    "answer1": "1 cup sliced kiwi",
    "answer1Total": "1",
    "answer2": "1 cup blueberries",
    "answer2Total": "2",
    "answer3": "1 cup strawberries",
    "answer3Total": "3"
  },
]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.game');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

 
function generateQuestions (index) {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;

    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }

    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    currentQuestion++;

        selectedOption.checked = false;

        if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your Health Score: ${totalScore}</h1>
         <div class="summary">
            <h2>You did it!</h2>
            <h2>See the health score of the dessert you made.</h2>
            <p>1 to 6 points - Not That Healthy</p>
            <p>7 to 12 points - Average Healthy</p>
            <p>12+ points - Very Healthy! </p>
            <h3> See More Recipes Below </h3>
        </div>
        <div class="row">
          <div class="dessertscolumn" id="bottominfo">
            <div class="dessertscard">
            <img src="images/cookie.png" style="width:100%" class="recipeimg">
              <div class="dessertscontainer">
                <h2>Chocolate Chip Cookie</h2>
                <ol>
                  <li>1/4 cup coconut oil (no butter & no egg)</li>
                  <li>1/4 cup brown sugar (as applesauce and sugar)</li>
                  <li>1 tablespoon vanilla extras</li>
                  <li>Whole wheat flour</li>
                  <li>150g dark chocolate chips</li>
                  <li>Optional: 20g cinnamon</li>
                </ol>
              </div>
              </div>
          </div>

          <div class="dessertscolumn" id="bottominfo">
            <div class="dessertscard">
              <img src="images/brownie.png" style="width:100%" class="recipeimg">
              <div class="dessertscontainer">
                <h2>Caramel Brownie</h2>
                <ol>
                  <li>1 cup black beans</li>
                  <li>3 tablespoons coconut oil/ vegetable oil</li>
                  <li>1/4 cup cocoa powder</li>
                  <li>1/4 tablespoon sea salt</li>
                  <li>1/4 cup honey</li>
                  <li>1/2 teaspoon baking powder</li>
                  <li>1/2 cup caramel sauce</li>
                </ol>
              </div>
            </div>
          </div>
  
          <div class="dessertscolumn" id="bottominfo">
            <div class="dessertscard">
              <img src="images/pancake.png" style="width:100%" class="recipeimg">
              <div class="dessertscontainer">
                <h2>Pancake</h2>
                <ol>
                  <li>2 cups Old Fashioned rolled oats</li>
                  <li>1 large egg</li>
                  <li>1/2 cup milk of choice</li>
                  <li>2 tablespoons salted butter, melted</li>
                  <li>1 tablespoon brwon sugar</li>
                  <li>1/2 tablespoon vanilla extra</li>
                  <li>1 tablespoon baking powder</li>
                  <li>1/2 teaspoon salt</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="recommendation" id="bottominfo">
          <div class="dessertscard">
            <h4>Recommendation</h4>
            <ol>
              <li>Fruits like apples, grapes, pineaples, cherries, figs, bananas, etc. are high in calories, so consuming less of these will be a good thing</li>
              <li>Berries especially raspberries, peaches, lemon, coconut, watermelon, oranges, etc. are low calories fruits. Filling your fruit bowl with these fruits to consume fewer calories and make it healthier!</li>
              <li>Honey offers antidepressants, anticonvulsants, and antianxiety benefits. However, consuming too much may cause adverse effects due to its high sugar and calorie content. Cream comes from saturated fat, and consuming too much saturated fat increases the risk of high cholesterol</li>
              <li>Whole wheat flour is healthier with high proteins, fibers, and a variety of vitamins and minerals, but low calories, compared to white flour</li>
              <li>White flour is made with only the endosperm, so it has a lower nutritional value</li>
              <li>Brown sugar had fewer calories than white sugar and chocolate, and the molasses in it can boost metabolism. It also provides the perfect amount of sweetness and keeps the cookie moist</li>
              <li>Nonfat milk have fewer calories and higher amount of vitamins than whole milk and less saturated fat.</li>
              <li>Cocoa powder is an unsweetened chocolate product that can provide a similar rich flavor to chocolate with healthier nutritional value. Using cocoa powder instead of chocolate helps to largely decrease the fat and calories of your brownies</li>
              <li>When consuming chocolate in relatively high amounts, the high-calorie content of chocolate will probably cause weight gain and establish risk factors for hypertension, diabetes, dyslipidemia, and cardiovascular disease</li>
            </ol>
          </div>
        </div>
        <button class="restart">Restart Game</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {
    currentQuestion--;
    score.pop();
    generateQuestions(currentQuestion);
}

function restartQuiz(e) {
    if(e.target.matches('button')) {
    currentQuestion = 0;
    score = [];
    location.reload();
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
