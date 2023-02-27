import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray900: "border-[2px] border-gray_900 border-solid",
};
const shapes = { RoundedBorder4: "rounded-[4px]" };
const sizes = { sm: "px-[2px] py-[3px]" };

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    errors: string[];
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      shape = "",
      variant = "",
      size = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${className} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { CheckBox };
