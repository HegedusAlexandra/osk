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
    initial:{
      width:'100%',
      position: 'absolute',
      zIndex: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '8vw',
      fontFamily: 'Afacad',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#404040',
      textShadow: "0 2.2px 2.2px rgba(0, 0, 0, 0.6)",
      wordSpacing: "2vw",
      display:'none'
    },
    visible: { 
        opacity:1,
        top:'10%',
        transition: { duration: 1,delay:1, ease: "easeInOut"},
        display:"block"
      },
    ascending: {
        opacity:1,
        zIndex:3,
        top:'40%',
        textShadow: "0 2.4px 1.4px rgba(0, 0, 0, 0.8)",
        transition: { duration: 1.5},
    },
    background: { backgroundColor: "#C62E65" },
    entering: { scale: 0, rotate: 90 },
    entered: {
      scale: 1,
      rotate: 1,
      backgroundColor: "#6601ff",
      transition: {
        scale: {
          duration: 1,
          ease: "easeOut"
        },
        rotate: {
          duration: 1.5
        }
      }
    },
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
    top: { y: [null, -150, 0] },
    something: {
      x: [null, -150, 0],
      transition: {
        duration: 3,
        times: [0, 0.3, 0.8],
        ease: ["backIn", "backOut"]
      }
    },
    thing: { x: [null, 150, 0] },
    zoom: { scale: [null, 2, 1], rotate: [0, 90, 0] },
    email: { x: 0, backgroundColor: "#023535" }, 
    call: { x: '2.3vh' ,backgroundColor: "#023535"}, 
    left: { x: 0, backgroundColor: "#990000" }, 
    right: { x: '2.3vh' ,backgroundColor: "#14532d"}, 
  }
  