interface Props {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
}

const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={e=>onChange(e.target.value)}
      className="w-full placeholder:text-gray-400 border-b-2 border-gray-300 focus:border-purple-800 text-sm px-2 py-1 outline-none"
    />
  );
};

export default Input;
