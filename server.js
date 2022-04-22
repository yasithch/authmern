const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
require("dotenv").config()
const{errorHandler}=require('./middleware/errorMiddleware')

const connectDB=require('./config/db')
connectDB()

const PORT = process.env.PORT || 8070

app.use(cors())
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const URL = process.env.MONGODB_URL

mongoose.connect(URL, {
  // useCreateIndex: true,
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
})

// const connection = mongoose.connection

// connection.once("open", () => {
//   console.log("mongodb connection success!")
// })

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


