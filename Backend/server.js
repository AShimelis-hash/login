
import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routers/userRouts.js"

const app = express()
const port = process.env.PORT || 8001
app.use(cors())
app.use (express.json())
connectDB()

app.use('api/user', userRouter)
app.get(('/', (req, res) => {
    res.send("API Working")
}))



app.listen(port, () => console.log("Server stated on port" + port))