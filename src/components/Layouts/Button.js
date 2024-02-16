import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 transition-all border-2 rounded-full border-brightColor text-brightColor hover:bg-stone-950 hover:text-white">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
