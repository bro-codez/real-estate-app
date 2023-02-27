import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
  FillGray52: "bg-gray_52",
  srcOutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
} as const;
const shapes = {
  RoundedBorder10: "rounded-[10px]",
  srcRoundedBorder10: "rounded-[10px]",
} as const;
const sizes = {
  sm: "pt-[6px]",
  md: "pb-[12px] pt-[15px] px-[12px]",
  lg: "pr-[16px] py-[17px]",
  xl: "py-[17px]",
  "2xl": "pb-[14px] pl-[14px] pt-[20px]",
  smSrc: "pb-[14px] pt-[20px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape = "",
      variant = "",
      size = "lg",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

export { Input };
