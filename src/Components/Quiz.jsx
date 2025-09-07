import React, { useState, useRef } from 'react'
import data from '../assets/data'
import './Quiz.css'

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null); 
  const option_array = [Option1, Option2, Option3, Option4];

  const checkAnswer = (e, ans) => {
    if (!lock) {
      if (data[index].ans === ans) {
        e.target.classList.add('correct');
        setScore(score + 1);
      } else {
        e.target.classList.add('wrong');
        option_array[data[index].ans - 1].current.classList.add('correct');
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setLock(false);
      option_array.forEach(option => {
        option.current.classList.remove('correct');
        option.current.classList.remove('wrong');
      });
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    option_array.forEach(option => {
      option.current.classList.remove('correct');
      option.current.classList.remove('wrong');
    });
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>You Scored {score} out of {data.length}!</h2>
          <button onClick={resetQuiz}>Reset</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {data[index].question}</h2>
          <ul>
            <li ref={Option1} onClick={e => checkAnswer(e, 1)}>{data[index].option1}</li>
            <li ref={Option2} onClick={e => checkAnswer(e, 2)}>{data[index].option2}</li>
            <li ref={Option3} onClick={e => checkAnswer(e, 3)}>{data[index].option3}</li>
            <li ref={Option4} onClick={e => checkAnswer(e, 4)}>{data[index].option4}</li>
          </ul>
          <button onClick={next} disabled={!lock}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz