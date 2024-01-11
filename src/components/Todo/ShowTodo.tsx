import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { TTodo } from "../../context/TodoProvider.interface";

const ShowTodo = () => {
  const { state } = useContext(TodoContext);
  return (
    <ol
      type="1"
      className="list-decimal px-10 py-5 rounded-md w-[400px] mx-auto mt-8 bg-white/20 text-white/80 text-left capitalize space-y-3"
    >
      {state?.map((todo: TTodo, index: number) => (
        <li
          key={todo.id}
          className="flex justify-between items-center gap-5 overflow-hidden"
        >
          <span>
            {index + 1}. {todo?.title}
          </span>
          <span>{todo.isCompleted ? "Completed" : "Pending"}</span>
        </li>
      ))}
    </ol>
  );
};

export default ShowTodo;
