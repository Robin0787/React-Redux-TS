import { ChangeEvent, useContext } from "react";
import toast from "react-hot-toast";
import { TodoContext } from "../../context/TodoProvider";
import { ActionTypes, TTodo } from "../../context/TodoProvider.interface";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);

  function handleFormSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const title: string = e.target.title.value;
    if (!title) {
      toast.error("Title is required!");
      return;
    }
    const todo: TTodo = {
      id: Math.round(Math.random() * 100).toString(),
      title,
      isCompleted: false,
    };
    dispatch({ type: ActionTypes.ADD_TODO, payload: todo });
    e.target.reset();
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
        <button className="btn">Add TODO</button>
      </form>
    </div>
  );
};

export default TodoForm;
