import { useEffect, useState } from "react";
import IObserver from "../IObserver";
import { useCallback } from "react";

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25
};
const useIntersectionObserver = (element, options = { ...DEFAULT_OPTIONS }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const intersectionCallback = useCallback(
    (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          setShouldAnimate(true);
        }
      });
    },
    // es-lint-disable-next-line
    [element.current, options]
  );

  useEffect(() => {
    if (!element || !element.current) return;
    const observer = new IObserver(intersectionCallback, options);
    observer.observe(element.current);
    return () => {
      observer.unobserve(element.current);
    };
    // es-lint-disable-next-line
  }, [element.current, options]);
  return { shouldAnimate };
};

export default useIntersectionObserver;
