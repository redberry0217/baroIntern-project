const Button = ({
  type,
  children,
  color,
  width,
  onClick,
}: {
  type?: "submit" | "reset" | "button";
  color: "primary" | "default";
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
}) => {
  const buttonColor =
    color === "primary" ? "bg-blue-500 text-white" : "bg-gray-400 text-white";

  return (
    <button
      type={type}
      className={`${
        width ? width : "w-full"
      } cursor-pointer rounded-lg p-3 ${buttonColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
