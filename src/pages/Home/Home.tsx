import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../../redux/features/counterSlice";

const Home = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="bg-black h-screen w-full text-white center overflow-hidden">
      <div className="border border-white/50 p-8 rounded-md">
        <h1 className="text-center text-4xl text-white py-4 bg-white/30 rounded-lg">
          {count}
        </h1>
        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="flex flex-col justify-between items-center gap-3 w-1/2 mx-auto">
            <button className="btn" onClick={() => dispatch(increment())}>
              Increment
            </button>
            <button
              className="btn"
              onClick={() => dispatch(incrementByValue(5))}
            >
              Increment By 5
            </button>
          </div>
          <div className="flex flex-col justify-between items-center gap-3 w-1/2">
            <button className="btn" onClick={() => dispatch(decrement())}>
              Decrement
            </button>
            <button
              className="btn"
              onClick={() => dispatch(decrementByValue(5))}
            >
              Decrement By 5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
