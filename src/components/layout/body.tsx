import { useState } from "react";

import AddTodo from "../entities/addTodo"
import TodoList from "../entities/todoList"
import { Todo } from "@/types";

const BodyLayout = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddButtonClick = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteButtonClick = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col gap-[102px]">
      <AddTodo onAddButtonClick={handleAddButtonClick} />
      <TodoList todos={todos} onDeleteTodoList={handleDeleteButtonClick} />
    </div>
  )
}

export default BodyLayout;