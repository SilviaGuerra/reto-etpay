import React from "react";

interface ButtonProps {
  label: string;
  link: string;
  size?: string;
}

const Button = (props: ButtonProps) => (
  <a
    className={`
      button transition ease-in-out delay-150 bg-blue-500
      hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
      duration-200 flex items-center justify-center rounded-md
      bg-primary-600 text-white font-semibold 
      ${
        props.size === "lg"
          ? "px-4 py-3 text-body-md"
          : "px-4 py-2.5 text-body-sm"
      }`}
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.label}
  </a>
);

export default Button;
