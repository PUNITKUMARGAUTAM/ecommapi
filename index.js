const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
//connection or setup for mongodb
const mongoose = require("mongoose");

//const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database connection is sucessfully!"))
.catch((err)=>{

    console.log(err)
});

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/cart",cartRoute);
//app.use("/api/users", userRoute);
/*app.get("/api/user",()=>{

    console.log("Dummy Api endpoint is working now !");
});
*/


app.listen(process.env.PORT||7000,()=>{

    console.log("Nodejs setup is sucessfully dn!");
});