import { useEffect, useState } from "react";
import { DEVICE_SIZE } from "../constants";

const useDeviceSize = () => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth;
      if (width < DEVICE_SIZE.laptopL) {
        setIsDesktopOrLaptop(false);
      } else {
        setIsDesktopOrLaptop(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktopOrLaptop: isDesktopOrLaptop };
};

export default useDeviceSize;
