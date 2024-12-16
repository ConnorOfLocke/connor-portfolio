import { useEffect } from "react";

export default function useResize(onResize) {
  useEffect(() => {
    //Call it on first hit
    onResize();

    //add it to the listener
    const listener = window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [onResize]);
}
