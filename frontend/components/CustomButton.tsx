type CustomProps = {
  className?: string;
  children?: React.ReactNode; // Ensure proper typing for children
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Correct typing for onClick
  style?: React.CSSProperties; // Added 'style' prop type
};

const CustomButton = ({ className, children, onClick, style }: CustomProps) => {
  return (
    <div className="h-full">
      <button
        style={style} // Ensure the style prop is applied
        onClick={onClick}
        className={` ${className} border-[1px] bg-black hover:bg-white px-4 border-black rounded-[0.25rem] text-white hover:text-black transition-all duration-[250ms]`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;