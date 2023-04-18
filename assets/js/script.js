// Create questions object like array with easyQuestions

const easyQuestions = [{
   answer: 0,
   choices: ["The Ancients", "The Goa'uld", "The Tau'ri", "The Asgard"],
   question: "What is the name of the alien race that originally built the Stargates in Stargate SG1?"
  },
  {
    answer: 1,
    choices: ["Ba'al", "Colonel Jack O'Neill", "Jacob Carter", "Radek Zelenka"],
    question: "What is the name of the primary protagonist in Stargate SG1?"
  },
  {
    answer: 1,
    choices: ["Earth", "Chulak", "P3X-988", "Mars"],
    question: "What is the name of the planet where the SG1 team first meets the Goa'uld, Apophis?"
  },
  {
    answer: 0,
    choices: ["The Goa'uld", "The Ori", "The Jaffa", "Humanity"],
    question: "Who is the SG1 team's main nemesis throughout most of the series?"
  },
  {
    answer: 3,
    choices: ["Warp Drive", "Combustion", "Steam", "The Asgard Hyperdrive"],
    question: "What is the name of the advanced technology that SG1 acquires from the Asgard, allowing them to travel vast distances instantly?"
  },
  {
    answer: 3,
    choices: ["Ragnarok", "Hathor", "Yu", "Ra"],
    question: "What is the name of the ancient Egyptian deity that the Goa'uld often pose as in Stargate SG1?"
  },
  {
    answer: 0,
    choices: ["Jacob Carter / Selmak", "Jean-Luc Picard", "Johnny Rico", "Diz"],
    question: "Who is the leader of the Tok'ra, the rebel faction of the Goa'uld who oppose the System Lords?"
  },
  {
    answer: 2,
    choices: ["Pluto", "Andromeda", "P4X-639", "The Moon"],
    question: "What is the name of the planet that the SG1 team travels to in the episode 'Window of Opportunity,' where they become trapped in a time loop?"
  },
  {
    answer: 3,
    choices: ["Mars", "Venus", "Earth", "Atlantis"],
    question: "What is the name of the planet where the SG1 team discovers the Lost City of the Ancients?"
  },
  {
    answer: 3,
    choices: ["Data", "Jean Rasczak", "Logan", "Dr. Daniel Jackson"],
    question: "Who is the first main character to leave the SG1 team?"
  },
  {
    answer: 1,
    choices: ["USS Enterprise", "The Prometheus", "Vorlon Cruiser", "Thargoid Mothership"],
    question: "What is the name of the Earth ship that serves as the primary mode of transportation for SG1?"
  },
  {
    answer: 0,
    choices: ["The Long-range communication device (LRC)", "Walkie Talkies", "DHD", "Short Range Thermometer"],
    question: "What is the name of the device that allows SG1 to communicate across vast distances via a subspace field?"
  },
  {
    answer: 1,
    choices: ["Dr Raj Koothrapalli", "Dr Samantha Carter", "Dr Crusher", "Dr Bob"],
    question: "What is the name of the SG1 team member who is an astrophysicist and serves as the main scientific advisor for the team?"
  }]

// Create questions object like array with hardQuestions

const hardQuestions = [{
    answer: 0,    
    choices: ["Meridian", "Ascension", "The Fifth Race", "Surrender"],
    question: "What is the name of the episode where Daniel ascends to a higher plane of existence?",
  },
  {
    answer: 1,
    choices: ["P5S-117", "P9C-882", "P3X-666", "P60"],
    question: "What is the name of the planet where the SG1 team discovers the 'super-soldier' program?",
  },
  {
    answer: 0,
    choices: ["The Priors' Staff", "The Book of Origin", "The Ark of Truth", "Wololo"],
    question: "What is the name of the advanced technology that the Ori use to convert people to their religion?",
  },
  {
    answer: 2,
    choices: ["Point of View", "Ripple Effect", "There But for the Grace of God", "Rise of the Cybermen"],
    question: "What is the name of the episode where SG1 travels to an alternate universe where Earth is under attack by the Goa'uld?",
  },
  {
    answer: 1,
    choices: ["P3X-593", "P2X-338", "P9C-882", "P45"],
    question: "What is the name of the planet where SG1 encounters the Re'tu, a race of beings that can possess human hosts?",
  },
  {
    answer: 0,
    choices: ["Moebius", "The Curse", "Forever in a Day", "Backwards"],
    question: "What is the name of the episode where SG1 travels back in time to ancient Egypt?",
  },
  {
    answer: 1,
    choices: ["The Gamekeeper", "Avatar", "Unending", "Endgame"],
    question: "What is the name of the episode where SG1 discovers a civilization that has created a virtual reality world?",
  },
  {
    answer: 0,
    choices: ["The Ancient Repository of Knowledge", "The Asgard Computer Core", "The Human-Machine Interface", "The Cortana Interface"],
    question: "What is the name of the device that SG1 uses to interface with the Asgard's computer systems?",
  },
  {
    answer: 1,
    choices: ["Touchstone", "Shades of Grey", "Chain Reaction", "Lower Decks"],
    question: "What is the name of the episode where SG1 must stop a rogue NID team from using the Stargate for personal gain?",
  },
  {
    answer: 2,
    choices: ["Sokar", "Hathor", "Anubis", "Seth"],
    question: "What is the name of the Goa'uld who is responsible for the destruction of the planet Abydos?",
  },
  {
    answer: 0,
    choices: ["The Serpent's Venom", "Exodus", "Full Circle", "Revenge is Sweet"],
    question: "What is the name of the episode where SG1 teams up with the Jaffa rebellion to destroy a Goa'uld mothership?",
  },
  {
    answer: 0,
    choices: ["The Devil You Know", "Divide and Conquer", "Tangent", "No Man Left Behind"],
    question: "What is the name of the episode where SG1 teams up with the Tok'ra to rescue Jacob Carter from a Goa'uld extraction ceremony?",
  },
  {
    answer: 1,
    choices: ["The Gamekeeper", "Avatar", "Unending", "To Boldly Go"],
    question: "What is the name of the episode where SG1 investigates a planet where the inhabitants believe that they are all living in a virtual reality?",
  }]

// Global Variables

let correctAnswer = 0;
let incorrectAnswer = 0;
let isEasyMode = true;




// GameMenuBtns container
let gameMenuBtns = document.getElementById("game-buttons");

// Start Quiz Button
let startQuiz = document.getElementById("start-btn");

// Game HUD Div
let gameHud = document.getElementById("game-hud");

// Correct Score Count Element
let correctScoreCount = document.getElementById("correct-score-count");

// Incorrect Score Count Element
let incorrectScoreCount = document.getElementById("incorrect-score-count");

// Scoreboard Element
let scoreboard = document.getElementById("scoreboard");

// Difficulty Toggle Event and click function
let difficultyBtn = document.getElementById("difficulty-btn");
difficultyBtn.addEventListener("click", () => {
  isEasyMode = !isEasyMode;
  difficultyBtn.textContent = isEasyMode ? "Easy Mode" : "Hard Mode";
});


// Listen for event on startQuiz button call startGame function

startQuiz.addEventListener("click", startGame);

function startGame() {
  runSteps([
    hideGameArea,
    countdown,
    popGameArea,
    checkQuestion
  ]);
}

function runSteps(steps) {
  steps.forEach((step) => step());
}

// Hide the menu buttons in game are
function hideGameArea() {
  gameMenuBtns.classList = "hidden";
}

// Show the Game Hud ready for gameplay
function popGameArea() {
  gameHud.classList = "show";
}


// Countdown Timer 
// Set initial countdown time
function countdown(timer) {
  let countDownTime = 30;
  // get elements from DOM
  let timerElement = document.getElementById("timer");
  // Update the countdown each second 
  let countdown = setInterval(function () {
    timerElement.innerHTML = countDownTime + " seconds left";
    // Decrement the countdown time by 1 second
    countDownTime--;

    // Stop the countdown timer when it reaches 0 or provide another function

    if (countDownTime < 0) {
      clearInterval(countdown);
      displayScoreboard();
    }
  }, 1000)
}

// Check difficulty load questions

function checkQuestion() {
  if (isEasyMode) {
    displayEasyQuestion();
  } else {
    displayHardQuestion();
  }
}

// quiz elements DOM
let questionElement = document.getElementById("question");
let choiceElement = document.getElementById("choice");

// randomize easy Questions

function displayEasyQuestion() {
  let randomEasyQuestion = easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
  // resets Choices
  choiceElement.innerHTML = "";

  // Display the random Easy Question
  questionElement.textContent = randomEasyQuestion.question;

  // Loop through randomEasyQuestion Choices
  randomEasyQuestion.choices.forEach((choice, index) => {
    // Create a list item
    let choiceLi = document.createElement("li");
    // Create new button
    let answerBtn = document.createElement("button");
    // Change newButtons text content to randomEasyQuestion.textContent choice
    answerBtn.classList.add("btn-warning")
    answerBtn.textContent = choice;
    answerBtn.addEventListener("click", () => {
      // Check choices.choice index matches answer
      if (index === randomEasyQuestion.answer) {
        answerBtn.className = "btn-success";
        // increment correctAnswer
        correctAnswer++;
        // display correctCounter
        let correctCountElement = document.getElementById("correct-count");
        correctCountElement.innerText = correctAnswer.toString();
      } else {
       answerBtn.className = "btn-danger";
        // increment incorrectAnswer
        incorrectAnswer++;
        // display incorrectCounter
        let incorrectCountElement = document.getElementById("incorrect-count");
        incorrectCountElement.innerText = incorrectAnswer.toString();
      }


      setTimeout(function () {

        displayEasyQuestion();
      }, 1000);


    });

    choiceLi.appendChild(answerBtn);
    choiceElement.appendChild(choiceLi);
  });
}

// randomize Hard Questions

function displayHardQuestion() {
  let randomHardQuestion = hardQuestions[Math.floor(Math.random() * hardQuestions.length)];
  // resets Choices
  choiceElement.innerHTML = "";

  // Display the randomHardQuestion
  questionElement.textContent = randomHardQuestion.question;

  // Loop through randomHardQuestion Choices
  randomHardQuestion.choices.forEach((choice, index) => {
    // Create a list item
    let choiceLi = document.createElement("li");
    // Create new button
    let answerBtn = document.createElement("button");
    // Change newButtons text content to randomHardQuestion.textContent choice
    answerBtn.classList.add("btn-warning");
    answerBtn.textContent = choice;
    answerBtn.addEventListener("click", () => {
      // Check choices.choice index matches answer
      if (index === randomHardQuestion.answer) {
        answerBtn.className = "btn-success";
        // increment correctAnswer
        correctAnswer++;
        // display correctCounter
        let correctCountElement = document.getElementById("correct-count");
        correctCountElement.innerText = correctAnswer.toString();
      } else {
        answerBtn.className = "btn-danger";
        // increment incorrectAnswer
        incorrectAnswer++;
        // display incorrectCounter
        let incorrectCountElement = document.getElementById("incorrect-count");
        incorrectCountElement.innerText = incorrectAnswer.toString();
      }



      setTimeout(function () {

        displayHardQuestion();
      }, 1000);


    });

    choiceLi.appendChild(answerBtn);
    choiceElement.appendChild(choiceLi);
  });
}

// Display the scoreboard

function displayScoreboard() {
  gameHud.classList = "hidden";
  scoreboard.classList.remove("hidden");
  correctScoreCount.innerHTML = correctAnswer;
  incorrectScoreCount.innerHTML = incorrectAnswer;
}