import ShowTodo from "../../components/Todo/ShowTodo";
import TodoForm from "../../components/Todo/TodoForm";
import TodoProvider from "../../context/TodoProvider";

const Home = () => {
  return (
    <div className="bg-black h-screen w-full text-white center">
      <TodoProvider>
        <div className="w-1/2 mx-auto">
          <h1 className="text-center text-3xl mb-5">To Do List</h1>
          <TodoForm />
          <ShowTodo />
        </div>
      </TodoProvider>
    </div>
  );
};

export default Home;
