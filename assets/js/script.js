// Create questions object like array with easyQuestions

const easyQuestions = [
    {
      question: "What is the name of the alien race that originally built the Stargates in Stargate SG1?",
      choices: ["The Ancients", "The Goa'uld", "The Tau'ri", "The Asgard"],
      answer: 0
    },
    {
      question: "What is the name of the primary protagonist in Stargate SG1?",
      choices: ["Ba'al", "Colonel Jack O'Neill", "Jacob Carter", "Radek Zelenka"],
      answer: 1
    },
    {
      question: "What is the name of the planet where the SG1 team first meets the Goa'uld, Apophis?",
      choices: ["Earth", "Chulak", "P3X-988", "Mars"],
      answer: 1
    },
    {
      question: "Who is the SG1 team's main nemesis throughout most of the series?",
      choices: ["The Goa'uld", "The Ori", "The Jaffa", "Humanity"],
      answer: 0
    },
    {
      question: "What is the name of the advanced technology that SG1 acquires from the Asgard, allowing them to travel vast distances instantly?",
      choices: ["Warp Drive", "Combustion", "Steam", "The Asgard Hyperdrive"],
      answer: 4
    },
    {
      question: "What is the name of the ancient Egyptian deity that the Goa'uld often pose as in Stargate SG1?",
      choices: ["Ragnarok", "Hathor", "Yu", "Ra"],
      answer: 3
    },
    {
      question: "Who is the leader of the Tok'ra, the rebel faction of the Goa'uld who oppose the System Lords?",
      choices: ["Jacob Carter / Selmak", "Jean-Luc Picard", "Johnny Rico", "Diz"],  
      answer: 0
    },
    {
      question: "What is the name of the planet that the SG1 team travels to in the episode 'Window of Opportunity,' where they become trapped in a time loop?",
      choices: ["Pluto", "Andromeda", "P4X-639", "The Moon"],  
      answer: 2
    },
    {
      question: "What is the name of the planet where the SG1 team discovers the Lost City of the Ancients?",
      choices: ["Mars", "Venus", "Earth", "Atlantis"],
      answer: 3
    },
    {
      question: "Who is the first main character to leave the SG1 team?",
      choices: ["Data", "Jean Rasczak", "Logan", "Dr. Daniel Jackson"],
      answer: 3
    },
    {
      question: "What is the name of the Earth ship that serves as the primary mode of transportation for SG1?",
      choices: ["USS Enterprise", "The Prometheus", "Vorlon Cruiser", "Thargoid Mothership"],
      answer: 1
    },
    {
      question: "What is the name of the device that allows SG1 to communicate across vast distances via a subspace field?",
      choices: ["The Long-range communication device (LRC)", "Walkie Talkies", "DHD", "Short Range Thermometer"],
      answer: 0
    },
    {
      question: "What is the name of the SG1 team member who is an astrophysicist and serves as the main scientific advisor for the team?",
      choices: ["Dr Raj Koothrapalli", "Dr Samantha Carter", "Dr Crusher", "Dr Bob"],
      answer: 1
    },
    {
      question: "What is the name of the planet where SG1 first encounters the Replicators?",
      choices: ["P3X-489", "Coruscant", "Dagobah", "Hala"],
      answer: 3
    },
    {
      question: "What is the name of the Goa'uld who serves as the main villain during the final two seasons of SG1?",
      choices: ["Zeus", "Seth", "Horus", "Ba'al"],
      answer: "Ba'al"
    },
    {
      question: "What is the name of the organization that oversees Stargate Command and the SG teams?",
      choices: ["Minipax", "The FBI", "The IOA", "DoE"],
      answer: 2
    },
    {
      question: "What is the name of the device that allows SG1 to dial the Stargate to other planets?",
      choices: ["The Dial Home Device (DHD)", "The Holodeck", "The Tardis", "The DeLorean"],
      answer: 0
    }
];

// Create questions object like array with hardQuestions

const hardQuestions = [  
    {
    question: "What is the name of the episode where Daniel ascends to a higher plane of existence?",   
    choices: ["Meridian", "Ascension", "The Fifth Race", "Surrender"],
    answer: 0
  },
  {
    question: "What is the name of the planet where the SG1 team discovers the 'super-soldier' program?",
    choices: ["P5S-117", "P9C-882", "P3X-666", "P60"],
    answer: 1
  },
  {
    question: "What is the name of the advanced technology that the Ori use to convert people to their religion?",
    choices: ["The Priors' Staff", "The Book of Origin", "The Ark of Truth", "Wololo"],
    answer: 0
  },
  {
    question: "What is the name of the episode where SG1 travels to an alternate universe where Earth is under attack by the Goa'uld?",
    choices: ["Point of View", "Ripple Effect", "There But for the Grace of God", "Rise of the Cybermen"],
    answer: 2
  },
  {
    question: "What is the name of the planet where SG1 encounters the Re'tu, a race of beings that can possess human hosts?",
    choices: ["P3X-593", "P2X-338", "P9C-882", "P45"],
    answer: 1
  },
  {
    question: "What is the name of the episode where SG1 travels back in time to ancient Egypt?",
    choices: ["Moebius", "The Curse", "Forever in a Day", "Backwards"],
    answer: 0
  },
  {
    question: "What is the name of the episode where SG1 discovers a civilization that has created a virtual reality world?",
    choices: ["The Gamekeeper", "Avatar", "Unending", "Endgame"],
    answer: 1
  },
  {
    question: "What is the name of the device that SG1 uses to interface with the Asgard's computer systems?",
    choices: ["The Ancient Repository of Knowledge", "The Asgard Computer Core", "The Human-Machine Interface", "The Cortana Interface"],
    answer: 0
  },
  {
    question: "What is the name of the episode where SG1 must stop a rogue NID team from using the Stargate for personal gain?",
    choices: ["Touchstone", "Shades of Grey", "Chain Reaction", "Lower Decks"],
    answer: 1
  },
  {
    question: "What is the name of the Goa'uld who is responsible for the destruction of the planet Abydos?",
    choices: ["Sokar", "Hathor", "Anubis", "Seth"],
    answer: 2
  },
  {
    question: "What is the name of the episode where SG1 teams up with the Jaffa rebellion to destroy a Goa'uld mothership?",
    choices: ["The Serpent's Venom", "Exodus", "Full Circle", "Revenge is Sweet"],
    answer: 0
  },
  {
    question: "What is the name of the episode where SG1 teams up with the Tok'ra to rescue Jacob Carter from a Goa'uld extraction ceremony?",
    choices: ["The Devil You Know", "Divide and Conquer", "Tangent", "No Man Left Behind"],
    answer: 0
  },
  {
    question: "What is the name of the episode where SG1 investigates a planet where the inhabitants believe that they are all living in a virtual reality?",
    choices: ["The Gamekeeper", "Avatar", "Unending", "To Boldly Go"],
    answer: 1
  }
];


// Get elements from the DOM

let gameBtns = document.getElementById("game-buttons");
let startQuiz = document.getElementById("start-btn");
let difficultyBtn = document.getElementById("difficulty-btn");
let gameArea = document.getElementById("game-hud");


// Event Listener on start quiz button

startQuiz.addEventListener("click", clearGameArea);
startQuiz.addEventListener("click", popGameArea);
startQuiz.addEventListener("click", countdown);
difficultyBtn.addEventListener("click", diffToggle);

// Toggle Difficulty 

function diffToggle() {
  if (difficultyBtn.textContent === "Easy Mode") {
    difficultyBtn.textContent = "Hard Mode";
  } else {
    difficultyBtn.textContent = "Easy Mode";
  }
}

// Clear the Game Area

function clearGameArea () {
  gameBtns.classList = "hidden";
}

// Populate the game area

function popGameArea () {
  gameArea.classList = "show";

}

// Countdown Timer 
  // Set initial countdown time
  function countdown() {
let countDownTime = 10;
  // get elements from DOM
let timerElement = document.getElementById("timer");
// Update the countdown each second 
let countdown = setInterval(function () {
  timerElement.innerHTML = countDownTime + " seconds left";
  // Decrement the countdown time by 1 second
  countDownTime--;

  // Stop the countdown timer when it reaches 0 or provide another function

  if(countDownTime < 0) {
    clearInterval(countdown);
    timerElement.innerHTML = "GAME OVER"
  }
} ,1000)
  }
