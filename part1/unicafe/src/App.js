import { useState } from 'react'

// creating button component
const Button = (props) => {

  return (

  <>
    <button onClick={props.handleClick} type='submit'>{props.name}</button>
  </>

  )

}


const Feedback = () => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodButton = () => {

    setGood(good + 1)
  }

  const handleNeutralButton = () => {

    setNeutral(neutral + 1)
  }

  const handleBadButton = () => {

    setBad(bad + 1)
  }

  return (

    <>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleGoodButton} />
      <Button name="neutral" handleClick={handleNeutralButton} />
      <Button name="bad" handleClick={handleBadButton} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </>
  )
}

export default App