import Sketch from "./Sketch.js";

const App = () => {
  let app;
  console.log("app");
  app = new Sketch({ container: "app" });

  app.execute();
};

App();
