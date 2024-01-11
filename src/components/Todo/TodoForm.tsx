import { ChangeEvent, useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { TTodo } from "../../context/TodoProvider.interface";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  function handleFormSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const title: string = e.target.title.value;
    const isCompleted: string = e.target.isCompleted.value;
    const todo: TTodo = {
      id: Math.round(Math.random() * 10).toString(),
      title,
      isCompleted: isCompleted === "true" ? true : false,
    };
    dispatch({ type: "addTodo", payload: todo });
  }
  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input"
          name="title"
          id="title"
          placeholder="title"
          autoComplete="off"
        />
        <input
          type="text"
          className="input"
          name="isCompleted"
          id="isCompleted"
          placeholder="isCompleted"
          autoComplete="off"
        />
        <button className="btn">Add TODO</button>
      </form>
    </div>
  );
};

export default TodoForm;
