import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { TodoContext } from "../../context/TodoProvider";
import { ActionTypes, TTodo } from "../../context/TodoProvider.interface";

type TSingleTodoProps = {
  todo: TTodo;
  index: number;
};

const SingleTodo = ({ todo, index }: TSingleTodoProps) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      key={todo.id}
      className="flex justify-between items-center gap-5 overflow-hidden"
    >
      <div className="flex justify-start items-center gap-3">
        <span className="text-red-600 cursor-pointer">
          <FaTrash
            size={15}
            onClick={() => {
              dispatch({
                type: ActionTypes.DELETE_TODO,
                payload: { id: todo.id },
              });
            }}
          />
        </span>
        <span>
          {index + 1}. {todo?.title}
        </span>
        <span className="text-white-500 cursor-pointer p-[2px] rounded-full bg-green-500 hover:bg-green-400 duration-200">
          <MdOutlineDone
            size={15}
            onClick={() => {
              dispatch({
                type: ActionTypes.COMPLETE_TODO,
                payload: { id: todo.id },
              });
            }}
          />
        </span>
      </div>
      <span
        className={`${todo.isCompleted ? "text-green-500" : "text-red-500"}`}
      >
        {todo.isCompleted ? "Completed" : "Pending"}
      </span>
    </li>
  );
};

export default SingleTodo;
