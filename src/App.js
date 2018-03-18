const fs = require("fs");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

class App {
  constructor() {
    this.express = express();

    this.express.use(helmet());
    this.express.use(express.static(`${__dirname}/..`))

    this.mountRoutes = this.mountRoutes.bind(this);

    this.mountRoutes();
  }

  mountRoutes() {
    const router = express.Router();

    router.get(
      "/",
      (req, res) => {
        const filePath = path.resolve(__dirname, "../index.html");

        return fs.readFile(filePath, (error, content) => {
          if (error) {
            return res.status(500).send("Error loading content");
          }

          return res.send(content.toString());
        });
      }
    );

    router.get(
      "/favicon.ico",
      (req, res) => res.json()
    );

    this.express.use("/", router);
  }
}

module.exports = App;
