import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type ButtonProps = {
  children:React.ReactNode,
  className?:string,
  arrowClassName?:string,
}

const ButtonPre = ({children,className,arrowClassName}:ButtonProps) => {
  return (
    <Button className={`${className} group relative px-4 py-2 border rounded-lg flex items-center gap-2 font-medium transition-all duration-200  focus:ring-2  focus:outline-none`}>
      {children}
      <ArrowRight className={`${arrowClassName} w-4 h-4 transition-transform duration-200 group-hover:translate-x-1`} />
    </Button>
  );
};

export default ButtonPre;
