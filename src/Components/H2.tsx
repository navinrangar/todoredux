import { HTMLAttributes, FC, memo } from "react";
import cn from "classnames";

type H2Props = HTMLAttributes<HTMLHeadingElement>;

const H2: FC<H2Props> = ({ children, className }) => {
  return (
    <>
      <h2 className={cn("font-semibold text-2xl", className)}>{children}</h2>
    </>
  );
};

export default memo(H2);
