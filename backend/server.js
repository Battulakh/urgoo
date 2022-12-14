import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/movies", (req, res) => {
  res.send(data.movies);
});
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
