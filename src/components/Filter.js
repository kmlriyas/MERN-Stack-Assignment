// src/components/Filter.js
import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Filter = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
    setActiveFilter(filterType);
  };

  return (
    <ButtonGroup className="mb-3">
      <Button
        variant="outline-primary"
        active={activeFilter === "all"}
        onClick={() => handleFilterClick("all")}
      >
        All
      </Button>
      <Button
        variant="outline-success"
        active={activeFilter === "completed"}
        onClick={() => handleFilterClick("completed")}
      >
        Completed
      </Button>
      <Button
        variant="outline-warning"
        active={activeFilter === "pending"}
        onClick={() => handleFilterClick("pending")}
      >
        Pending
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
