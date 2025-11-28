const express = require("express");
//const cors = require("cors");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

/* 🔥🔥🔥 YAHI MAIN FIX HAI 🔥🔥🔥
   ❌ localhost / 127.0.0.1 HATA DIYA
   ✅ mongo use kiya (docker-compose service name)
*/
db.mongoose
  .connect("mongodb://mongo:27017/mean", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ Connected to the database!");
  })
  .catch(err => {
    console.log("❌ Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}.`);
});
