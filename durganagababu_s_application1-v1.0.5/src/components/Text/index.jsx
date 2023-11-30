import React from "react";

const sizeClasses = {
  txtPlusJakartaSansRomanMedium18: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold18: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansExtraBold64Bluegray200:
    "font-extrabold font-plusjakartasans",
  txtAMAZONICPERSONALUSEBold26: "font-amazonicpersonaluse font-normal",
  txtPlusJakartaSansRomanRegular18: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold24: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold18Gray700:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold18Gray900:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold18WhiteA700:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansExtraBold24Black900: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansExtraBold64: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansExtraBold64Black900: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansExtraBold24: "font-extrabold font-plusjakartasans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
