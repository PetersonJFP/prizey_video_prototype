export default {
  app: {
    textAlign: "center",
    overflow: "hidden"
  },
  wrapper: {
    position: "relative",
    height: "100vh"
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1
  },
  text: {
    color: "blanchedalmond",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: "13%",
    zIndex: 2
  },
  progressBar: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "95%",
    height: "5px",
    position: "absolute",
    bottom: "12%",
    left: "2.5%",
    zIndex: 2
  },
  progress: {
    backgroundColor: "rgb(193, 233, 18)",
    height: "100%",
    transitionProperty: "width",
    transitionDuration: "3s"
  }
};
