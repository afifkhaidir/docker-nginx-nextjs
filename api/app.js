const express = require("express");
const app = express();

const DATA = [
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
];

app.get("/posts", (req, res) => {
  res.status(200).json({
    data: DATA,
  });
});

/* Simulate long response API */
app.get("/post/:id", (req, res) => {
  const { id: paramsId } = req.params;
  const id = parseInt(paramsId, 10);

  setTimeout(() => {
    const filteredData = DATA.find(data => data.id === id);
  
    res.status(200).json(filteredData);
  }, 6000);
});

app.listen(9000, () => {
  console.log("API server running on port 9000");
});
