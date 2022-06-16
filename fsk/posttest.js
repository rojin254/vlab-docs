
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "When does over-modulation occur?",
      answers: {
        a: "Modulating signal voltage < Carrier voltage",
        b: "Modulating signal voltage = Carrier voltage",
        c: " Modulating signal voltage > Carrier voltage",
        d: "Modulating signal voltage =0"
      },
      correctAnswer: "c"
    },

    {
      question: "What is the modulation index value if Vmax=5.9v and Vmin=1.2v?",
      answers: {
        a: "0.5",
        b: "0.425",
        c: " 0.662",
        d: "0.14"
      },
      correctAnswer: "c"
    },

    {
      question: "What happens when the amplitude of the modulating signal is greater than the amplitude of the carrier?",
      answers: {
        a: "Distortion",
        b: "Decay",
        c: "Amplification",
        d: "Attenuation"
      },
      correctAnswer: "a"
    },

    
    {
      question: "Modulation is done in _______",
      answers: {
        a: "Radio receiver",
        b: "Transmitter",
        c: "Between transmitter and radio receiver",
        d: "None of the options"
      },
      correctAnswer: "b"
    },

    {
      question: "In an AM wave useful power is carrier by ______ ",
      answers: {
        a: "Carrier",
        b: "Sidebands",
        c: "Both sidebands and carrier",
        d: "None of the options"
      },
      correctAnswer: "b"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
