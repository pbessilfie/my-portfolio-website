import { slideLeft, slideUp, cardReveal } from "./motionSystem";

export const fadeIn = (direction, delay, index = 1) => {
  const effectiveDelay = index > 0 ? delay * index : delay;
  if (direction === "left") return slideLeft(effectiveDelay);
  return slideUp(effectiveDelay);
};

export const scaleIn = (delay, index = 1) => cardReveal(index);
