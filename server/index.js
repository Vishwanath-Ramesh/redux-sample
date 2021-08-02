const express = require("express");
const cors = require("cors");

const todoListsRoute = require("./routes/todoLists");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ data: "Welcome" });
});
app.use("/api/", todoListsRoute);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
