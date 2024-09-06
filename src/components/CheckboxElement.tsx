export type CheckboxElementProps = {
  fieldValue: string;
  label: string;
};

export const CheckboxElement = ({
  fieldValue,
  label,
}: CheckboxElementProps) => {
  return (
    <div className="flex gap-4 w-full">
      <input
        type="checkbox"
        className="p-2 rounded-md shadow-md border border-gray-300"
        id={fieldValue}
      />
      <label htmlFor={fieldValue}>{label}</label>
    </div>
  );
};