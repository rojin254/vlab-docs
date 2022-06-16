
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
      question: " Frequency Shift Keying  is _____",
      answers: {
        a: "Change in amplitude of the carrier according to modulating signal",
        b: "Change in frequency of the carrier according to amplitude of modulating signal",
        c: " Change in amplitude of the modulating signal according to carrier signal",
        d: "Change in amplitude of the carrier according to modulating signal frequency"
      },
      correctAnswer: "b"
    },


    {
      question: "Carrier signals in this modulation technique is _______ signals",
      answers: {
        a: "High frequency",
        b: "Low frequency",
        c: " High amplitude",
        d: "Low amplitude"
      },
      correctAnswer: "a"
    },

    {
      question: "________ is mostly preferred for telegraphy",
      answers: {
        a: "Single tone modulation",
        b: "On-off keying",
        c: "FSK",
        d: "PCM"
      },
      correctAnswer: "c"
    },

    {
      question: " What is the need of Modulation?",
      answers: {
        a: "To reduce the length of Antenna",
        b: "Transmitting signal to longer distance",
        c: "Recuding the attenuation of the Signal",
        d: "All of the Above"
      },
      correctAnswer: "d"
    },

    {
      question: " The process of changing one of the characteristics of a carrier analog signal based on the information in a digital signal is called _________________conversion",
      answers: {
        a: "Analog-to –analog",
        b: "Analog-to-digital",
        c: "Digital-to-analog",
        d: "Digital-to-digital"
      },
      correctAnswer: "c"
    },


  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
