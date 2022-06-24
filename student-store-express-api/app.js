const express = require("express");
const morgan = require("morgan");
const storeRouter = require("../student-store-express-api/routes/routes")
const cors = require("cors");
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use("/store", storeRouter);


app.get('/', async (req,res) => {
   res.status(200).json({ping:"pongggggg"})
})


module.exports = app;