const GET_DEFAULT_REVEAL_VARIANTS = (delay?: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay || 0.3,
      },
    },
  };
};

const GET_SCALE_REVEAL_VARIANTS = (delay?: number) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay || 0.2,
        duration: 0.5,
      },
    },
  };
};

const GET_REVEAL_VARIANTS = (delay?: number) => {
  return {
    hidden: {
      left: "0%",
    },
    visible: {
      left: "100%",
      transition: {
        delay: delay || 0.5,
      },
    },
  };
};

export {
  GET_DEFAULT_REVEAL_VARIANTS,
  GET_SCALE_REVEAL_VARIANTS,
  GET_REVEAL_VARIANTS,
};
