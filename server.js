const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://lewis:lewis123@fitness-tracker.oe2fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require("./controllers"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  