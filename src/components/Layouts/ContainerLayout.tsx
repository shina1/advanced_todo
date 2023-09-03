import React, { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const ContainerLayout = ({ children }: layoutProps) => {
  return <main className="px-[2rem]">{children}</main>;
};

export default ContainerLayout;
