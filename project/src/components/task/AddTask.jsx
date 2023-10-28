import { useState } from "react";
import { addTask } from "../../store/tasks";
import { useDispatch } from "react-redux";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState("");
  // const dispatch = useDispatch();

  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          // setText("");
          // dispatch(addTask({ id: nextId++, text }));
        }}
      >
        Add
      </button>
    </>
  );
}
