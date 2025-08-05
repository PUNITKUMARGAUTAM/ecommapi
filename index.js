const express =  require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRouter = require('./routes/user');

const app = express();
app.use(express.json());

dotenv.config();

app.use('/api/node' , userRouter);

mongoose.connect(process.env.mongo_uri,{

}).then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Database connection failed" , err));

app.listen(process.env.PORT || 7000 , () => {
    console.log("Serevre runing on ${PORT}");
});