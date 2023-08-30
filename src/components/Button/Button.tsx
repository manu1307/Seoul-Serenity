import React from "react";

type ButtonProps = {
  children?: string;
};

function Button({ children }: ButtonProps) {
  return (
    <div className="button flex justify-center items-center w-full h-12 text-xl rounded-full  text-white">
      {children}
    </div>
  );
}

export default Button;
