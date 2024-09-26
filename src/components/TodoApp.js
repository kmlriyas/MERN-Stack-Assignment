// src/components/TodoApp.js
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import { Container, Row, Col } from "react-bootstrap";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load dummy todos from the API on initial component mount
  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=6")
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);
  console.log(todos);
  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <section className="page-wrapper">
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="text-center mb-4">Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter} />
            <TodoList
              todos={filteredTodos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TodoApp;
