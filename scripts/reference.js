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
      "answer3": "MWhole Wheat Flour",
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
  let healthScore = [];
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
  
  //Generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
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
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      healthScore.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = healhScore.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //Final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //Hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score">Your Activity Score: ${totalScore}</h1>
           <div class="summary">
              <h2>Now that you have the point score correlated with your day, see below for which plate will be ideal to help you recover and thrive in your next session! </h2>
              <p>1 to 5 points - Plate #1</p>
              <p>6 to 9 points - Plate #2</p>
              <p>10+ points - Plate #3 </p>
              <h2> See Your Plate Below </h2>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz
      location.reload();
      }
  
  }
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);