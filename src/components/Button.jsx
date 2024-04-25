/* eslint-disable react/prop-types */

const Button = ({ children, className, type = "button"}) => {
  return (
    <button
      type={type}
      className={`${className} bg-primary border-2 border-dark text-dark hover:bg-opacity-90 px-4 py-1 rounded-md font-display text-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
