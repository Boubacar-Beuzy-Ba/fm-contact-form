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
        className="p-2 rounded-md border border-gray-300"
        id={fieldValue}
      />
      <label htmlFor={fieldValue} className="text-wrap sm:text-nowrap">
        {label}
      </label>
    </div>
  );
};