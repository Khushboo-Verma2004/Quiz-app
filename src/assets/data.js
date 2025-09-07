// quiz-data.js
// Export an array of question objects for a React quiz app.
// Each object follows the format:
// { question: "", option1: "", option2: "", option3: "", option4: "", ans: 1 }
// where `ans` is the number (1-4) of the correct option.

const data = [
  {
    question: "What is the capital city of India?",
    option1: "Mumbai",
    option2: "New Delhi",
    option3: "Kolkata",
    option4: "Chennai",
    ans: 2
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    option1: "Gold",
    option2: "Oxygen",
    option3: "Osmium",
    option4: "Silver",
    ans: 2
  },
  {
    question: "What is the largest planet in our solar system?",
    option1: "Earth",
    option2: "Mars",
    option3: "Jupiter",
    option4: "Saturn",
    ans: 3
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    option1: "William Shakespeare",
    option2: "Charles Dickens",
    option3: "Jane Austen",
    option4: "George Bernard Shaw",
    ans: 1
  },
  {
    question: "Which language is primarily used for styling web pages?",
    option1: "HTML",
    option2: "Python",
    option3: "CSS",
    option4: "JavaScript",
    ans: 3
  }
];

export default data;
