import React, {useState} from 'react';
import data from './data';
import './quizstyle.css';

export default function QuizApp() {

    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    const handleNext = () => {
        if(index < data.length-1) {
            if(data[index].answer === option) {
                setScore(score + 1);
            }
            setIndex(index+1);
            setOption(null);
        }
        else {
            if(data[index].answer === option) {
                setScore(score + 1);
            }
            setFinished(true);
        }
    }
    if(finished) {
        return (
            <div className = 'scorePage'>
                <h1>Quiz Completed</h1>
                <h3>Your Score is {score} out of {data.length}</h3>
            </div>
        )
    }
    const handleSelect= (choice) => {
        setOption(data[index].options[choice]);

    }

    return (
        <div className="quiz">
                <h1>{data[index].question}</h1>
                <ul>
                    <li className = {option === data[index].options[0] ? "selected" : ""}
                        onClick={() => handleSelect(0)}>
                            {data[index].options[0]}</li>

                    <li className = {option === data[index].options[1] ? "selected" : ""}
                        onClick={() => handleSelect(1)}>
                            {data[index].options[1]}</li>

                    <li className = {option === data[index].options[2] ? "selected" : ""}
                        onClick={() => handleSelect(2)}>
                            {data[index].options[2]}</li>

                    <li className = {option === data[index].options[3] ? "selected" : ""}
                        onClick={() => handleSelect(3)}>
                            {data[index].options[3]}</li>
                </ul>
                <button onClick={handleNext} disabled={!option}>Next</button>

            <h5>Question {index+1} of {data.length}</h5>
            <h4>Score:  {score}</h4>
        </div>
    )
}