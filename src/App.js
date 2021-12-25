import React from 'react'
import Header from './components/Header'
import Todolist from './components/Todolist'
import todosData from './data/todosData'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
        const changedTodo = Object.assign({}, todo, {
        completed: todo.id === id ? !todo.completed : todo.completed
        });
        return changedTodo;
        })
        return{
          todos: updatedTodos
        }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <Todolist key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        <Header />
        {todoItems}
      </div>
    )
  }

}

export default App;
