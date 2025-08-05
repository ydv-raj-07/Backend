import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//we are configuring the cors here
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials : true
}))

// yah pe setting kar rahe hai ki kis kis type ka data aayega aur kitna limit ka
// data hum accept kar rahe hai
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



export {app}