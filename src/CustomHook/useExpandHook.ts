import { useState } from "react";

const useExpandHook = () => {
  const [isExpanded, setIsExpanded] = useState<boolean[]>([]);

  const handleExpand = (i: number) => {
    setIsExpanded((prev) => {
      const temp: boolean[] = [...prev];
      temp[i] = !temp[i];
      return temp;
    });
  };
  return {
    isExpanded,
    handleExpand,
  };
};


export default useExpandHook;