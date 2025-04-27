import React, { useRef } from "react";
import { useKeyHandler } from "../hooks/useKeyHandler";

const InputRef = () => {
  const myInputRef = useRef();
  const focus = useKeyHandler(myInputRef);

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <label className="text-xl text-gray-200 ">Focus Input</label>
      <input
        ref={myInputRef}
        type="text"
        className={
          focus ? "bg-yellow-300 border-2 rounded-lg" : "border-2 rounded-lg"
        }
      />
      <p className="text-yellow-300">
        {focus ? "The input is focused Press ctrl + Enter keys to blur" : "Press ctrl + Enter keys to focus"}
      </p>
    </div>
  );
};

export default InputRef;
