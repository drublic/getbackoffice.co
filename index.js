const Logger = require("./src/Logger");
const App = require("./src/App");

const PORT = process.env.PORT || 4000;

const app = new App().express;

app.listen(PORT, (err) => {
  if (err) {
    return Logger.info(err);
  }

  return Logger.info(`server is listening on ${PORT}`);
});
