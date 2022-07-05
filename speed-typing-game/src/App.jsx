import React from "react";
import './index.css'

const App = () => {
    const [text, setText] = React.useState('')
    const [timeRemaining, setTimeRemaining] = React.useState(10)

    function handleChange(e) {
        setText(e.target.value)
    }

    function countWords() {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== '').length
    }

    function startGame() {
        
    }

	return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startGame}>
                Start
            </button>
            <h1>Word count: {countWords()}</h1>
        </div>
    )
};

export default App;