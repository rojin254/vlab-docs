
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
      question: "The modulation technique most affected by noise is",
      answers: {
        a: "ASK",
        b: "FSK",
        c: "PSK",
        d: "QAM"
      },
      correctAnswer: "a"
    },

    {
      question: "OOK is a ______ type of modulation",
      answers: {
        a: "ASK",
        b: "FSK",
        c: "PSK",
        d: "QAM"
      },
      correctAnswer: "a"
    },

    {
      question: "An ASK modulated signal has a bit rate of 2000 bps; the baud rate is _______",
      answers: {
        a: "2000",
        b: "1000",
        c: "4000",
        d: "none of the above"
      },
      correctAnswer: "a"
    },

    
    {
      question: "Two ways of ASK demodulation are",
      answers: {
        a: "Coherent detection & non-Coherent detection",
        b: "Synchronous demodulation & non-Synchronous demodulation",
        c: "both a & b",
        d: "there is only one demodulation technique in ASK."
      },
      correctAnswer: "b"
    },

    {
      question: "The minimum bandwidth for an ASK modulated signal with a baud rate of 5000 is _____ Hz",
      answers: {
        a: "1000",
        b: "5000",
        c: "2000",
        d: "2500"
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
