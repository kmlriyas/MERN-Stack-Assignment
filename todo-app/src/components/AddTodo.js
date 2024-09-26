import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      setError("Todo cannot be empty.");
      return;
    }

    setError(null);

    const newTodo = {
      id: Math.random().toString(36).substring(2, 9), // Generate a random ID
      todo: todo,
      completed: false,
    };

    addTodo(newTodo);

    // Clear input field after adding
    setTodo("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          className="shadow-none"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add new task"
          isInvalid={!!error}
        />
        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </InputGroup>
      {error && <div className="invalid">{error}</div>}
    </Form>
  );
};

export default AddTodo;
