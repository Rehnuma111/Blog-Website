const express = require("express");
const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const cors = require('cors');
 
const app = express();
require("dotenv").config();
require("../backend/connection");
const port = process.env.PORT;
//cors



//middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));



app.use(express.json())


app.use("/user", userRouter);
app.use("/post",postRouter);


app.listen(port, () => {
  console.log(`Api is running on ${port}`);
});
