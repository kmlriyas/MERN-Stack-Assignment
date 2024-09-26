import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListGroup.Item
      className={"d-flex justify-content-between align-items-center"}
    >
      <span
        onClick={() => toggleComplete(todo.id)}
        role="button"
        className={`todo-title ${
          todo.completed ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.todo}
      </span>
      <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
