import React from "react";

const shapes = {
  RoundedBorder10: "rounded-[10px]",
  icbCircleBorder30: "rounded-[30px]",
} as const;
const variants = {
  OutlineBluegray102:
    "border-[1px] border-bluegray_102 border-solid text-gray_900",
  FillGray900: "bg-gray_900 text-white_A700",
  FillGray300: "bg-gray_300 text-gray_900",
  OutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid text-gray_700",
  OutlineBluegray101: "border-[1px] border-bluegray_101 border-solid",
  OutlineGray700: "border-[1px] border-gray_700 border-solid text-gray_900",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  OutlineBluegray100_1:
    "border-[1px] border-bluegray_100 border-solid text-gray_900",
  OutlineGray600: "border-[1px] border-gray_600 border-solid text-gray_900",
  OutlineGray600_1:
    "bg-white_A700 border-[1px] border-gray_600 border-solid text-gray_900",
  icbOutlineBluegray30033: "bg-white_A700 shadow-bs",
} as const;
const sizes = {
  sm: "",
  md: "pl-[8px] py-[8px]",
  lg: "pr-[9px] py-[9px]",
  xl: "p-[10px]",
  "2xl": "p-[13px]",
  "3xl": "pl-[13px] py-[13px]",
  "4xl": "p-[17px]",
  "5xl": "pl-[16px] py-[17px]",
  "6xl": "pr-[17px] py-[17px]",
  smIcn: "p-[14px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
