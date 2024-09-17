type customprops = {
  className?: string;
  children?: any;
  onClick?: any;
  type?: any;
};

const CustomButton = ({ className, children, onClick, type }: customprops) => {
  return (
    <div className="h-full">
      <button
        type={type}
        onClick={onClick}
        className={` ${className} border-[1px] bg-black hover:bg-white px-4  border-black rounded-[0.25rem] text-white hover:text-black transition-all duration-[250ms]`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
