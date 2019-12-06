const express = require("express");
const app = express();

//middlewears
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

//visual routes
app.use("/", express.static("public"));

//error handling
app.use((req: any, res: any, callback: any) => {
  const error: any = new Error("Not Found");
  error.status = 404;
  callback(error);
});

app.use((error: any, req: any, res: any, callback: any) => {
  res.status(error.status || 500);
  res.json({
    error: error.message
  });
});

module.exports = app;
