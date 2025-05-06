require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");

global.__basedir = __dirname;

mongoAtlasUri = process.env.MONGODB_URL;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
      {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          tlsAllowInvalidCertificates: true 
      },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

app.get("/", (req, res) => {
  return res.send("shanto updated");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
