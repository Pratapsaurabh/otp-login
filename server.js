require("dotenv/config");

const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(process.env.MONGODB_URL_LOCAL)
  .then(() => console.log("connected to mongodb!"))
  .catch((err) => console.log("connection failed!"));

// mongoose
//   .connect(process.env.MONGODB_URL_LOCAL, (err) => {
//     if (err) console.log(`unable to connect : ${err}`);
//     else console.log("mongodb is connected");
//   })
//   .then(() => console.log("connected to mongodb!"))
//   .catch((err) => console.log("connection failed!"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
