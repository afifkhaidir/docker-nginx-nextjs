const express = require("express");
const app = express();

app.get("/posts", (req, res) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        title: "First Post",
      },
      {
        id: 2,
        title: "Second Post",
      },
      {
        id: 3,
        title: "Third Post",
      },
    ],
  });
});

app.listen(9000, () => {
  console.log("API server running on port 9000");
});
