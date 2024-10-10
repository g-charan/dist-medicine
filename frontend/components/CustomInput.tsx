import "../app/globals.css";

const CustomInput = ({ placeholder, className, mainClassName, type }: any) => {
  return (
    <div className={`${mainClassName} flex`}>
      <label className="relative">
        <input
          type={type}
          className={`${className} border-2 px-2 py-2 border-black focus:border-blue-600 rounded-md focus:text-black outline-none constant-color-input`}
          placeholder=" "
        ></input>
        <span className="top-1 left-0 absolute mx-2 p-1 transition duration-200 input-text">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default CustomInput;
