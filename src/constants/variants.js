export const fadeIn = (direction, delay, index = 1) => {
  return {
    hidden: {
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration:0.7,
        delay: delay * index,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export const scaleIn = (delay, index = 1) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration:0.7,
        delay: delay * index,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
