
import express from "express"
import cors from "cors"
import "dotenv/config"
//import connectDB from "./Config/mongodb.js"


const app = express()
const port = process.env.PORT || 8001
app.use(cors())
app.use (express.json())

app.get(('/', (req, res) => {
    res.send("API Working")
}))



app.listen(port, () => console.log("Server stated on port" + port))