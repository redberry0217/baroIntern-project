const Input = ({
  type,
  placeholder,
  label,
  value,
  isRequired,
  onChange,
}: {
  type: string;
  placeholder?: string;
  label?: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <div className="text-sm text-gray-500">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-gray-300 rounded-lg p-3"
      />
    </div>
  );
};

export default Input;
