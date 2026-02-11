console.log('Lets write JavaScript.');

const fossils = [
  {
    name: "Tyrannosaurus Rex",
    age: "66 million years old",
    type: "Theropod dinosaur",
    fact: "T-Rex had the strongest bite force of any land animal, capable of crushing bones effortlessly.",
    summary: "The 66 million year old T Rex was a massive theropod dinosaur known for its unmatched bone crushing bite force."
  },
  {
    name: "Triceratops",
    age: "68–66 million years old",
    type: "herbivorous dinosaur",
    fact: "Triceratops had three strong facial horns used for defence and could charge predators with great force.",
    summary: "The Triceratops, living 68–66 million years ago, was an herbivorous dinosaur known for its powerful horns and defensive charging abilities."
  }
];

const humanEvolution = [
  {
    name: "Early Human",
    fact: "Early humans used simple stone tools and began walking more upright than their ancestors.",
    src: "img/human 3.png"
  },
  {
    name: "Homo Erectus",
    fact: "Homo Erectus was the first human species to walk fully upright and control fire.",
    src: "img/human 4.png"
  },
  {
    name: "Homo Sapiens",
    fact: "Homo Sapiens developed advanced language, art, and complex tools, leading to modern human civilization.",
    src: "img/human 5.png"
  }
];

const mountainVsNormal = [
  {
    feature: "Oxygen Intake Efficiency",
    mountain: {
      description: "Mountain people absorb more oxygen from thin air with higher oxygen-use efficiency.",
      percentage: "63"   // +13 above baseline → matches 20–30% more efficiency
    },
    normal: {
      description: "Normal people have baseline oxygen efficiency which drops at high altitude.",
      percentage: "48"   // -2 below baseline
    }
  },

  {
    feature: "Lung Capacity",
    mountain: {
      description: "Mountain people have 25–35% larger lung capacity with a broader chest.",
      percentage: "68"   // +18 → matches 25–35% bigger lungs
    },
    normal: {
      description: "Normal people have standard lung capacity which reduces at altitude.",
      percentage: "52"   // slightly above baseline (normal lungs are fine at sea level)
    }
  },

  {
    feature: "Red Blood Cell Count",
    mountain: {
      description: "Mountain people naturally have more red blood cells which transport oxygen efficiently.",
      percentage: "58"   // +8 → matches 10–20% higher RBC count
    },
    normal: {
      description: "Normal people maintain standard red blood cell levels under regular conditions.",
      percentage: "45"   // slightly below baseline (drops at altitude)
    }
  }
];

Questions =
  [
    [
      "Which fossil type helped scientists understand the early human walking posture?",
      "Dino skull",
      "Erectus bones",
      "Sea fossil",
      "Shell fossil",
      2
    ],

    [
      "Which early species showed major progress in tool making and upright walking?",
      "Sapiens group",
      "Habilis form",
      "Erectus type",
      "Neander kind",
      3
    ],

    [
      "Which human group survives better because their bodies absorb oxygen efficiently?",
      "Mountain group",
      "Low people",
      "City humans",
      "Forest tribes",
      1
    ],

    [
      "Why do normal people struggle breathing when climbing extremely high mountain regions?",
      "Cold winds",
      "Weak lungs",
      "High slopes",
      "Low oxygen",
      4
    ],

    [
      "Which order correctly shows the evolution path from early primates to modern humans?",
      "Sapiens first",
      "Monkey erectus",
      "Homo erectus",
      "Erectus sapiens",
      2
    ]
  ];

let feedbacks = [
  "Try Again",     // 0
  "Nice Effort",   // 1
  "Good Try",      // 2
  "Well Done",     // 3
  "Great Work",    // 4
  "Perfect Score"  // 5
];

const stages = [
  { img: "img/human 1.png", name: "Monkey / Early Primate" },
  { img: "img/human 2.png", name: "Australopithecus" },
  { img: "img/human 3.png", name: "Homo Erectus" },
  { img: "img/human 4.png", name: "Early Homo Sapiens" },
  { img: "img/human 5.png", name: "Modern Human" }
];

let clickedNum = 0;
let question = 0;
let score = 0;
let scorePercent = 0;


function firstHandler() {
  document.querySelector('.fossil-images').innerHTML = '';
  document.querySelector('.fossil-info').innerHTML = '';

  let first = `<div class="first-fossil first-fossil-js">
                    <img src="img/fossil 1.png" alt="">
                    <h2>${fossils[0].name}</h2>
                </div>`;

  let second = `<div class="second-fossil second-fossil-js">
                    <img src="img/fossil 2.png" alt="">
                </div>`;

  document.querySelector('.fossil-images').innerHTML = first + second;

  let info = `
            <div class="age">
                <div>Age:</div> 
                <div>${fossils[0].age}</div>    
            </div>

            <div class="type">
                <div>TYPE:</div> 
                <div>${fossils[0].type}</div>
            </div>

            <div class="fact">
                <div>FACT: ${fossils[0].fact}</div>   
            </div>
            `;

  document.querySelector('.fossil-info').innerHTML = info;

  const utterance = new SpeechSynthesisUtterance(fossils[0].summary);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);

  addListeners();
}


function secondHandler() {
  document.querySelector('.fossil-images').innerHTML = '';
  document.querySelector('.fossil-info').innerHTML = '';

  let first = `<div class="second-fossil first-fossil-js">
                    <img src="img/fossil 1.png" alt="">
                </div>`;

  let second = `<div class="first-fossil second-fossil-js">
                    <img src="img/fossil 2.png" alt="">
                    <h2>${fossils[1].name}</h2>
                </div>`;

  document.querySelector('.fossil-images').innerHTML = first + second;

  let info = `
            <div class="age">
                <div>Age:</div> 
                <div>${fossils[1].age}</div>    
            </div>

            <div class="type">
                <div>TYPE:</div> 
                <div>${fossils[1].type}</div>
            </div>

            <div class="fact">
                <div>FACT: ${fossils[1].fact}</div>   
            </div>
            `;

  document.querySelector('.fossil-info').innerHTML = info;

  const utterance = new SpeechSynthesisUtterance(fossils[1].summary);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);

  addListeners();
}

function displayEvolution() {
  for (let index = 0; index < humanEvolution.length; index++) {
    const human = humanEvolution[index];

    let phases = `<div class="phase">
                <img src="${human.src}" alt="">
                <h2>${human.name}</h2>
                <button class="index-${index}">Tap to Hear Fact</button>
            </div>`

    document.querySelector('.human-evolution').innerHTML += phases;
  };
};


displayEvolution();

function addListeners() {
  document.querySelector('.first-fossil-js')?.addEventListener('click', firstHandler);
  document.querySelector('.second-fossil-js')?.addEventListener('click', secondHandler);
}


let evoIndex = 0;

function showEvolutionSlide() {
  const stage = stages[evoIndex];

  document.querySelector('.evo-slide').innerHTML = `
      <img src="${stage.img}" alt="Human Stage">
      <h2>${stage.name}</h2>
  `;

  // move to next stage
  evoIndex++;

  // restart when reaching end
  if (evoIndex >= stages.length) {
    evoIndex = 0;
  }
}

// show first slide immediately
showEvolutionSlide();

// change slide every 2 seconds
setInterval(showEvolutionSlide, 2000);


document.querySelector('.index-0').addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(humanEvolution[0].fact);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
});

document.querySelector('.index-1').addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(humanEvolution[1].fact);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
});

document.querySelector('.index-2').addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(humanEvolution[2].fact);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
});

document.querySelector('.next').addEventListener('click', () => {

  if (clickedNum == 2) {
    clickedNum = 0;
  } else {
    clickedNum += 1
  }

  let normalPerson = `
            <h1>Normal Person</h1>
            <img src="img/normal person.png" alt="">
            <p>${mountainVsNormal[clickedNum].normal.description}</p>
            <div class="division"></div>
            <h2>${mountainVsNormal[clickedNum].feature}</h2>
            <div class="data">
                <div class="whole">
                    <div style="width: ${mountainVsNormal[clickedNum].normal.percentage}%;" class="percent"></div>
                </div>
                <div class="display-percent">${mountainVsNormal[clickedNum].normal.percentage + '%'}</div>
            </div>`

  document.querySelector('.normal-person').innerHTML = normalPerson;

  let mountainPerson = `
            <h1>Mountain Person</h1>
            <img src="img/mountain person.png" alt="">
            <p>${mountainVsNormal[clickedNum].mountain.description}</p>
            <div class="division"></div>
            <h2>${mountainVsNormal[clickedNum].feature}</h2>
            <div class="data">
                <div class="whole">
                    <div style="width: ${mountainVsNormal[clickedNum].mountain.percentage}%;" class="percent"></div>
                </div>
                <div class="display-percent">${mountainVsNormal[clickedNum].mountain.percentage + '%'}</div>
            </div>`

  document.querySelector('.mountain-person').innerHTML = mountainPerson;
});

function quiz(question) {
  let currentQuestion = Questions[question];
  let quizString = `<div class="main-quiz">
            <div class="score">
                <h3>Score: ${score}/5</h3>
                <div class="total-score">
                    <div style="width: ${scorePercent + '%'}" class="user-score"></div>
                </div>
            </div>

            <div class="question">
                <p>Q${question + 1}. ${currentQuestion[0]}</p>
            </div>

            <div class="options">
                <div class="upper">
                    <div class="option" data-answer="1">${currentQuestion[1]}</div>
                    <div class="option" data-answer="2">${currentQuestion[2]}</div>
                </div>

                <div class="lower">
                    <div class="option" data-answer="3">${currentQuestion[3]}</div>
                    <div class="option" data-answer="4">${currentQuestion[4]}</div>
                </div>
            </div>
        </div>`

  document.querySelector('.FIFTH').innerHTML = quizString;

  document.querySelector('.options').addEventListener('click', function (event) {
    if (event.target.classList.contains('option')) {
      const optionClicked = event.target.dataset.answer;

      if (optionClicked == currentQuestion[5]) {
        event.target.style.backgroundColor = '#43D9FF'
        event.target.style.color = '#112032'
        score = score + 1;
        scorePercent = scorePercent + 20;

        if (question == 4) {
          question = 0;
          let result = `<div class="result">
            <h1>${feedbacks[score]}</h1>
            <div class="circle-container">
                <svg class="progress-ring" viewBox="0 0 200 200">
                    <circle class="progress-ring-bg" cx="100" cy="100" r="90" />
                    <circle class="progress-ring-fill" cx="100" cy="100" r="90" />
                </svg>
                <div class="center-text" id="percentText">${score}/5</div>
            </div>

            <button class="start-quiz">Play Again</button>
        </div> `

          setTimeout(() => {
            document.querySelector('.FIFTH').innerHTML = result;

            // Now apply progress ring logic AFTER DOM is inserted
            const circle = document.querySelector(".progress-ring-fill");
            const circumference = 565;

            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = circumference;

            const percent = score / 5; // score ÷ 5
            const offset = circumference * (1 - percent);

            requestAnimationFrame(() => {
              circle.style.transition = "stroke-dashoffset 1s ease";
              circle.style.strokeDashoffset = offset;
            });

            document.querySelector('.start-quiz').addEventListener('click', () => {
              score = 0;
              scorePercent = 0;
              question = 0;
              quiz(question);
            });

          }, 600);



        } else {
          setTimeout(() => {
            question++;
            quiz(question);
          }, 600);

        }
      } else {
        event.target.style.backgroundColor = 'red';
        event.target.style.color = '#112032';
        event.target.style.border = '1px solid red'

        let correctAnswer = document.querySelectorAll('.option');

        for (let index = 0; index < correctAnswer.length; index++) {
          const eachOption = correctAnswer[index];

          if (eachOption.dataset.answer == currentQuestion[5]) {
            eachOption.style.backgroundColor = '#43D9FF'
            eachOption.style.color = '#112032';
          }
          
        }

        if (question == 4) {
          question = 0;
          let result = `<div class="result">
            <h1>${feedbacks[score]}</h1>
            <div class="circle-container">
                <svg class="progress-ring" viewBox="0 0 200 200">
                    <circle class="progress-ring-bg" cx="100" cy="100" r="90" />
                    <circle class="progress-ring-fill" cx="100" cy="100" r="90" />
                </svg>
                <div class="center-text" id="percentText">${score}/5</div>
            </div>

            <button class="start-quiz">Play Again</button>
        </div> `

          setTimeout(() => {
            document.querySelector('.FIFTH').innerHTML = result;

            // Now apply progress ring logic AFTER DOM is inserted
            const circle = document.querySelector(".progress-ring-fill");
            const circumference = 565;

            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = circumference;

            const percent = score / 5; // score ÷ 5
            const offset = circumference * (1 - percent);

            requestAnimationFrame(() => {
              circle.style.transition = "stroke-dashoffset 1s ease";
              circle.style.strokeDashoffset = offset;
            });

            document.querySelector('.start-quiz').addEventListener('click', () => {
              score = 0;
              scorePercent = 0;
              question = 0;
              quiz(question);
            });

          }, 600);



        } else {
          setTimeout(() => {
            question++;
            quiz(question);
          }, 600);

        }

      }
    }
  })
};

document.querySelector('.start-quiz').addEventListener('click', () => {
  score = 0;
  scorePercent = 0;
  question = 0;
  quiz(question);
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('aside').style.left = 0;
})

document.querySelector('.cross').addEventListener('click', () => {
  document.querySelector('aside').style.left = '-200%'
})

addListeners();
