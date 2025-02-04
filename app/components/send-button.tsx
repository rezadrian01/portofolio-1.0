import React from "react";
import { SendHorizontal } from "lucide-react";

const SendButton = () => {
  return (
    <button
      type="submit"
      className="flex gap-4 items-center bg-[#6D96B6] hover:bg-[#5A7B94] px-4 py-2 rounded"
    >
      Send
      <SendHorizontal size={15} />
    </button>
  );
};

export default SendButton;
