const Header = (props) => {

  console.log(props)
  return (
    
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {

  return (
    
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>

  )
}

const Content = (props) => {

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Part name = {part1.name} exercises = {part1.exercises} />
      <Part name = {part2.name} exercises = {part2.exercises}   />
      <Part name = {part3.name} exercises = {part3.exercises} />
    </>
    
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

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course = {course} />
      <Content />
      <Total exercises = {part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App