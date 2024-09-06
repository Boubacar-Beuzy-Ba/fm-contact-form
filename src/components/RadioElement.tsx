export type RadioElementProps = {
  fieldValue: string;
  label: string;
};

export const RadioElement = ({ fieldValue, label }: RadioElementProps) => {
  return (
    <div className="flex gap-4 w-full border-2 p-2 rounded-md shadow-md sm:my-6 my-2">
      <input
        type="radio"
        className="p-4 rounded-full border border-gray-300"
        id={fieldValue}
        value={fieldValue}
        name="choice"
      />
      <label htmlFor={fieldValue}>{label}</label>
    </div>
  );
};
