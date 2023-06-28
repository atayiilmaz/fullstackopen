const Header = (props) => {

  return (

    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {

  return (

    <div>
      <p>
      {props.parts} {props.exercises}
    </p>
    </div>

  )
}

const Total = (props) => {

  return (

    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {

  return (
    <>
      <Header course = 'Half Stack application development' />
      <Content parts = 'Fundamentals of React' exercises = {10} />
      <Content parts = 'Using props to pass data' exercises = {7} />
      <Content parts = 'State of a component' exercises = {14} />
      <Total exercises = {10+7+14} />
    </>
  )
}

export default App