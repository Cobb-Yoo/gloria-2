const app = require("./app");
const pool = require("./database/pool");
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server is up on port ${port}`);
  //console.log("Database Connected");
});
