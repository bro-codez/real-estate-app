import React from "react";

const variantClasses = {
  h1: "font-extrabold sm:text-[40px] md:text-[46px] text-[54px]",
  h2: "font-extrabold sm:text-[36px] md:text-[42px] text-[46px]",
  h3: "font-extrabold sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "font-extrabold sm:text-[24px] md:text-[26px] text-[28px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  body1: "text-[20px]",
  body2: "font-bold text-[19.25px]",
  body3: "text-[18px]",
  body4: "text-[16px]",
  body5: "font-normal text-[14px]",
  body6: "font-semibold text-[12.83px]",
  body7: "font-semibold text-[12px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
