const express = require("express");
const app = express();
const PORT = 3000;
const usersRouter = require("./routes/users");

app.use(express.json());
app.use(usersRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
