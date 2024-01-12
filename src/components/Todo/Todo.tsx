import TodoProvider from "../../context/TodoProvider";
import ShowTodo from "./ShowTodo";
import TodoForm from "./TodoForm";

const Todo = () => {
  return (
    <TodoProvider>
      <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="w-[95%] md:w-[40%]">
          <h1 className="text-3xl text-center mb-5">Create To Do</h1>
          <TodoForm />
        </div>
        <div className="w-[95%] md:w-[60%]">
          <h1 className="text-3xl text-center mb-5">To Do List</h1>
          <ShowTodo />
        </div>
      </div>
    </TodoProvider>
  );
};

export default Todo;
