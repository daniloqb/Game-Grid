import Sketch from "./Sketch.js";

const App = () => {
  let app;
  
  app = new Sketch({ container: "app" });

  app.execute();
};

App();
