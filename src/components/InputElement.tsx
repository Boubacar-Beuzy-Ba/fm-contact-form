export type InputElementProps = {
  fieldValue: string;
  label: string;
  type: string;
  placeholder?: string;
};
export const InputElement = ({
  fieldValue,
  label,
  type,
  placeholder,
}: InputElementProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <label htmlFor={fieldValue}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 rounded-md shadow-md border border-gray-300"
      />
    </div>
  );
};
