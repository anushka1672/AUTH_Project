require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const connectDB = require("./lib/db");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));