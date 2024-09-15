type customprops = {
  className?: string;
  children?: any;
  onClick?: any;
};

const CustomButton = ({ className, children, onClick }: customprops) => {
  return (
    <div className="h-full">
      <button
        onClick={onClick}
        className={` ${className} border-[1px] bg-black hover:bg-white px-4  border-black rounded-[0.25rem] text-white hover:text-black transition-all duration-[250ms]`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
