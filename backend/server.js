const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

app.use(cors());

const item = require("./routes/ItemRoutes");

mongoose.connect(
  "mongodb+srv://mdarif2903:L2DMsoOdCIN8D3dR@cluster0.ouy4n.mongodb.net/whishlist_db?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api", item);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
