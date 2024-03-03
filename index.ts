import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("helo world");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
