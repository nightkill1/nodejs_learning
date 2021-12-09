const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./route/user")

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connecting Success "))
    .catch((err) => { console.log("err", err) })


app.use("/api/user", userRoute)






app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/`);
});
