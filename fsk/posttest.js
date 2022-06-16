
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
      question: "The modulation technique less affected by noise is",
      answers: {
        a: "FSK",
        b: "ASK",
        c: " PSK",
        d: "None of these"
      },
      correctAnswer: "a"
    },

    {
      question: "In Binary FSK, mark and space respectively represent",
      answers: {
        a: "11 and 00",
        b: "1 and 0",
        c: "0 and 1",
        d: "00 and 11"
      },
      correctAnswer: "c"
    },

    {
      question: "If the desired transmission bit rate for a coherent binary FSK system is 4 Kbits / sec, the best possible interval between the carriers is",
      answers: {
        a:" 0.5 mS",
        b: "0.25 mS",
        c: "1 mS",
        d: "5 mS"
      },
      correctAnswer: "a"
    },

    
    {
      question: "Which FSK has no phase discontinuity?",
      answers: {
        a:" Discrete FSK",
        b: "Continuous FSK",
        c:" Uniform FSK",
        d:"None of the mentioned"
      },
      correctAnswer: "b"
    },

    {
      question: "FSK reception is ",
      answers: {
        a: " Phase Coherent",
        b: "Phase Coherent & non coherent",
        c: "Phase non coherent",
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
