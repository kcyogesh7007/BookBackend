const express = require("express");
const app = express();

require("./database/connection");
const bookRoute = require("./routes/bookRoute");

app.use(express.json());

app.use("/api", bookRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
