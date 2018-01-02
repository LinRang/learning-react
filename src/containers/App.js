import React from 'react'
import CounterApp from './counter'
import AuthExample from '../components/AuthExample'
import BasicExample from '../components/BasicExample'
import TodoApp from '../components/Todo/TodoApp'


const App = (props) => {
  return (
    <div>
      <CounterApp/>
      <BasicExample/>
      <AuthExample/>
      <TodoApp/>
    </div>
  )
}

export default App