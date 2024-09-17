import React from "react";
import { styled } from "@mui/system"; // For MUI styling

type CustomProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  variant?: "contained" | "outlined" | "text";
  sx?: object; // Added sx prop for MUI-style overrides
};

// Using MUI styled to support sx prop
const StyledButton = styled("button")(({ sx }) => ({
  ...sx, // Merge sx styles here
}));

const CustomButton: React.FC<CustomProps> = ({ className, children, onClick, style, variant = "contained", sx }) => {
  return (
    <div className="h-full">
      <StyledButton
        style={style}
        onClick={onClick}
        sx={sx} // Apply the sx prop here
        className={`${className} px-4 rounded-[0.25rem] transition-all duration-[250ms] ${
          variant === "contained"
            ? "bg-black text-white border-black hover:bg-white hover:text-black"
            : variant === "outlined"
            ? "bg-transparent text-black border-black hover:bg-black hover:text-white"
            : "bg-transparent text-black hover:bg-gray-100"
        }`}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default CustomButton;
