import React, { FC } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  id: string;
  type: "text" | "phone" | "email";
}

const Input: FC<InputProps> = ({ id, name, placeholder, type }) => {
  return (
    <div>
      <input
        className="bg-transparent outline-none border-b-2 border-slate-400 focus:border-slate-200 w-full p-2 text-white"
        placeholder={placeholder}
        id={id}
        name={name}
        required={type === "phone" ? false : true}
        type={type === "phone" ? "string" : type}
        inputMode={type === "phone" ? "tel" : "none"}
      />
    </div>
  );
};

export default Input;
