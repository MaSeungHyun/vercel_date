import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

function Button(props: ButtonProps) {
  return <button {...props} />;
}

export default Button;
