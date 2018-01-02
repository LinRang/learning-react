import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/todos/AddTodo'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'

const TodoApp = () => (
  <div>
    <h1>Todo example</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
