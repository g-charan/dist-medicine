import { twMerge } from "tailwind-merge";

const CustomFieldInput = ({
  LabelClassName,
  InputClassName,
  Label,
  placeholder,
  type,
  value,
  setvalue,
}: any) => {
  return (
    <>
      <label
        className={twMerge(
          "flex flex-col pb-1 pl-1 font-semibold text-gray-900 text-sm",
          LabelClassName
        )}
      >
        {Label}
      </label>
      <input
        value={value}
        type={type}
        onChange={setvalue}
        placeholder={placeholder}
        className={twMerge(
          "border-2 focus:border-2 p-2 focus:border-black rounded-lg focus:rounded-md w-[90%]",
          InputClassName
        )}
      ></input>
    </>
  );
};

export default CustomFieldInput;
