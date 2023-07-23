import { useState } from 'react'

// creating button component
const Button = (props) => {

  return (

  <>
    <button onClick={props.handleClick} type='submit'>{props.name}</button>
  </>

  )

}

const StatisticLine = (props) => {

  return (

    <>
      <p>{props.name} {props.value}</p>
    </>
  )
}


const Statistics = (props) => {

  if(props.total == 0) {
    
    return (

      <>
        No feedback given
      </>
    )
  }

  return (

    <>

      <StatisticLine name="good" value={props.good} />
      <StatisticLine name="neutral" value={props.neutral} />
      <StatisticLine name="bad" value={props.bad} />
      <StatisticLine name="total" value={props.total} />
      <StatisticLine name="average" value={props.average} />
      <StatisticLine name="positive" value={props.positive} />
    </>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodButton = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad + neutral)
    setAverage((updatedGood - bad) / total)
    setPositive((updatedGood) / total * 100)
  }

  const handleNeutralButton = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + bad + updatedNeutral)
    setAverage((good - bad) / total)
    setPositive((good) / total * 100)
  }

  const handleBadButton = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + updatedBad + neutral)
    setAverage((good - updatedBad) / total)
    setPositive((good) / total * 100)
  }

  return (

    <>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleGoodButton} />
      <Button name="neutral" handleClick={handleNeutralButton} />
      <Button name="bad" handleClick={handleBadButton} />
      <h1>statistics</h1>
      <Statistics total={total} good={good} neutral={neutral} bad={bad} average={average} positive={positive} />

    </>
  )
}

export default App