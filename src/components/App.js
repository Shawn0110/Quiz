import React, { useState } from "react";
import "../App.css";
import { quizzes } from "../constants";
import Button from "./Button";

function App() {
	const [currentNo, setCurrentNo] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);
	

	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore((score) => score + 1);
		}
		// 마지막 퀴즈인지 체크하기
		if (currentNo === quizzes.length - 1) {
			setShowResult(true);
		} else {
			setCurrentNo((currentNo) => currentNo + 1);
		}
	};

	const convertedScore = Math.floor((score / quizzes.length) * 100);

	return (
		<div className="container">
			{showResult ? (
				<div className="app">
					<h1 className="result-header">Your Score is</h1>
					<p className="result-score">{convertedScore}</p>
				</div>
			) : (
				<div className="app">
					<div className="question-section">
						<h1 className="question-header">
							<span>{quizzes[currentNo].id}</span>/{quizzes.length}
						</h1>
						<div className="question-text">{quizzes[currentNo].question}</div>
					</div>
					<div className="answer-section">
                        {quizzes[currentNo].answers.map((answer) => (
                            <Button
                                text={answer.text}
								onClick={() => handleClick(answer.isCorrect)}
                            >
                            </Button>
                        ))}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;