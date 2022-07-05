import React from "react";
import './index.css'

const App = () => {
    const STARTING_TIME = 5
    const [text, setText] = React.useState('')
    const [wordCount, setWordCount] = React.useState(0)
    const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME)
    const [timeIsRunning, setTimeIsRunning] = React.useState(false)
    const textBoxRef = React.useRef(null)

    function handleChange(e) {
        setText(e.target.value)
    }

    function countWords() {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== '').length
    }

    function startGame() {
        setTimeRemaining(STARTING_TIME)
        setTimeIsRunning(true)
        setText('')
        setWordCount(0)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setTimeIsRunning(false)
        setWordCount(countWords())
    }

    React.useEffect(() => {
        if(timeIsRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeIsRunning, timeRemaining])

	return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!timeIsRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={timeIsRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
};

export default App;