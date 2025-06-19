import React, { ComponentProps } from "react";

type ContainerProps = ComponentProps<"section"> & {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section className="min-w-[300px] max-w-[300px] min-h-[800px] max-h-[400px] overflow-auto bg-black flex flex-1 flex-col justify-center text-[#F0F0F0]">
      {children}
    </section>
  );
}
