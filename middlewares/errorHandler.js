import logEvents from "./logEvents.js";

export const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  logEvents(`${err.name}: ${err.message}`, "errorLogs.txt");
  res.status(500).send(err.message);
};
