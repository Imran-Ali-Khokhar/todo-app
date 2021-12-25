import React from 'react'
import Header from './components/Header'
import Todolist from './components/Todolist'
import todosData from './data/todosData'

function App() {
  const todoComponents = todosData.map(item => <Todolist key={item.id} item={item} />)

  return (
    <div>
        <Header />
        {todoComponents}
    </div>
  );
}

export default App;
