type customprops = {
  className?: string;
  children?: any;
  onclick?: any;
};

const CustomButton = ({ className, children, onclick }: customprops) => {
  return (
    <div>
      <button
        onClick={onclick}
        className={` ${className} border-[1px] bg-black hover:bg-white px-4  border-black rounded-[0.25rem] text-white hover:text-black transition-all duration-[250ms]`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
