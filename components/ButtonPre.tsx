import React from "react";
import { ArrowRight } from "lucide-react";

const ButtonPre = () => {
  return (
    <button className="group relative px-4 py-2 border rounded-lg flex items-center gap-2 font-medium transition-all duration-200  focus:ring-2  focus:outline-none">
      Hi
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
};

export default ButtonPre;
