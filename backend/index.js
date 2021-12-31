const connectToMongo = require("./db");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
