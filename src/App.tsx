import React, {useState} from 'react';
import {ITodo} from "./types/data";
import {TodoList} from "./components/TodoList";


const App: React.FC = ( ) => {
  const [value, setValue] = useState(' ')
  const [todos, setTodos] = useState<ITodo[]>([])


  const addTodo = () => {
    if (value) {
    setTodos([...todos, {
      id: Date.now(),
      title: value,
      complete: false
    }])
      setValue( '')
    }
  }
  return (
    <div className="App">
      <div>
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        <TodoList items={todos} />
      </div>

    </div>
  );
}

export default App;

