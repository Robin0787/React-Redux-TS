import { ChangeEvent, useReducer } from "react";

type TUser = {
  name: string;
  age: number;
  hobbies: string[];
};

type TAction = {
  type: string;
  payload: string;
};

const initialState: TUser = {
  name: "",
  age: 0,
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  const { type, payload } = action;
  switch (type) {
    case "addName":
      return {
        ...currentState,
        name: payload,
      };
    case "addAge":
      return {
        ...currentState,
        age: Number(payload),
      };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: payload.split(" "),
      };
    default:
      return currentState;
  }
};

const UserInfoWithUseState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(state);
  }

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="off"
          onBlur={(e) => dispatch({ type: "addName", payload: e.target.value })}
        />
        <input
          type="number"
          className="input"
          name="age"
          id="age"
          placeholder="Age"
          autoComplete="off"
          onBlur={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        />
        <input
          type="text"
          className="input"
          name="hobby"
          id="hobby"
          placeholder="Hobby"
          autoComplete="off"
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default UserInfoWithUseState;
