const dotenv = require("dotenv"); //for using environment variables

// catching unexpected errors
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 5000;
const server = app.listen(port);

// catcjhing unhandledRejection

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  // close the server when unhandled rejection occurs
  server.close(() => {
    process.exit(1);
  });
});
