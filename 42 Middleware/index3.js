import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method" , req.method);
  console.log("Request URL" , req.url);
  next();
  // next is important bcs when the middleware finished it has to move and we can move thanks to next() function
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
