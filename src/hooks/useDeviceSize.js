import { useEffect, useState } from "react";
import { DEVICE_SIZE } from "../constants";

const useDeviceSize = (minWidth) => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth;
      if (minWidth ? width < minWidth : width < DEVICE_SIZE.laptop) {
        setIsDesktopOrLaptop(false);
      } else {
        setIsDesktopOrLaptop(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  return { isDesktopOrLaptop: isDesktopOrLaptop };
};

export default useDeviceSize;
