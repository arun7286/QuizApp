import React, {useState} from 'react';
import QuizApp from './QuizApp';
import './quizstyle.css'
function App() {

  const[start , setStart] = useState(false);
  if(start) {
    return (
        <QuizApp />
    )
  }
  return (
      <div className="quiz">
        <h1>Quiz</h1>
        <button onClick = {() => {setStart(true)}}>Start Now</button>
        </div>
  );
}

export default App;
