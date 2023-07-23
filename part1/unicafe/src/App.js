import { useState } from 'react'

// creating button component
const Button = (props) => {

  return (

  <>
    <button type='submit'>{props.name}</button>
  </>

  )

}

const Header = () => {

}

const Feedback = () => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good"></Button>
      <Button name="neutral"></Button>
      <Button name="bad"></Button>
      <h1>statistics</h1>

    </div>
  )
}

export default App