export const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    hiddenList: { opacity: 0},
    visibleList: { 
      opacity: 1,  
      transition: { duration: 0.5,ease: "easeIn" }
    },
    visibleCard: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5 ,ease: "easeIn"}
    },
    hiddenMenu: {
      y: "-10vh",
      opacity: 0
    },
    visibleMenu: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut'
      }
    },
    hideMenu: {
      y:"-10vh",
      opacity: 0,
      transition: {
        ease: 'easeOut'
      }
    },

  }
  