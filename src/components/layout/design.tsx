import type { ReactNode } from "react";

interface DesignProps {
  children: ReactNode;
}

export const DesignLayout = (props: DesignProps): ReactNode => {
  return <div>{props.children}</div>;
};
