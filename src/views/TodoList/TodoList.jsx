import React, { useState } from "react";

const initialTodos = [
  {
    id: 0,
    text: "Sacar al perro",
    completed: false,
  },
  {
    id: 1,
    text: "Bajar la basura",
    completed: false,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const addNewTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length, text: newTodo, completed: false },
    ]);
  };
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div>
      <h3>Todo List</h3>
      <div>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleComplete(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </li>
        ))}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addNewTodo}>Add new Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
