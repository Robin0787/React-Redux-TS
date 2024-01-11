import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { TTodo } from "../../context/TodoProvider.interface";
import SingleTodo from "./SingleTodo";

const ShowTodo = () => {
  const { state } = useContext(TodoContext);
  return (
    <ol
      type="1"
      className="list-decimal px-10 py-5 rounded-md w-full  bg-white/20 text-white/80 text-left capitalize space-y-3"
    >
      {state?.map((todo: TTodo, index: number) => (
        <SingleTodo todo={todo} index={index} />
      ))}
    </ol>
  );
};

export default ShowTodo;
