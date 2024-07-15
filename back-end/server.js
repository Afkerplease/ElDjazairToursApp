const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(` Server running on port ${PORT} `));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server" });
});
