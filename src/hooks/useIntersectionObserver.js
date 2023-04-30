import { useEffect, useState } from "react";
import IObserver from "../IObserver";

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25
};
const useIntersectionObserver = (element, options = { ...DEFAULT_OPTIONS }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const intersectionCallback = (entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        setShouldAnimate(true);
      }
    });
  };

  useEffect(() => {
    if (!element) return;
    const observer = new IObserver(intersectionCallback, options);
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [element, options]);
  return { shouldAnimate };
};

export default useIntersectionObserver;
