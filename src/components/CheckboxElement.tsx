export type CheckboxElementProps = {
  fieldValue: string;
  label: string;
};

export const CheckboxElement = ({
  fieldValue,
  label,
}: CheckboxElementProps) => {
  return (
    <div className="flex gap-4 w-full border-2 p-2 rounded-md shadow-md my-6">
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
