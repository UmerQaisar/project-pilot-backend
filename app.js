require("dotenv").config();
const express = require("express");

const app = express();
const rootRoutes = require("./routes/index.routes");
const PORT = process.env.PORT || 3000;

app.use("/api", rootRoutes);
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
