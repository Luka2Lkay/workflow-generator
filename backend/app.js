require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

const { workflowRouter } = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running" });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

workflowRouter(app);
module.exports = app;
