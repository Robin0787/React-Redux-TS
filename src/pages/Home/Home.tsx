import ShowTodo from "../../components/Todo/ShowTodo";
import TodoForm from "../../components/Todo/TodoForm";
import TodoProvider from "../../context/TodoProvider";

const Home = () => {
  return (
    <div className="bg-black h-screen w-full text-white center">
      <TodoProvider>
        <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row gap-5 justify-center items-start">
          <div className="w-full md:w-[40%]">
            <h1 className="text-3xl text-center mb-5">Create To Do</h1>
            <TodoForm />
          </div>
          <div className="w-full md:w-[60%]">
            <h1 className="text-3xl text-center mb-5">To Do List</h1>
            <ShowTodo />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
};

export default Home;
