require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use("/api/emails", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
