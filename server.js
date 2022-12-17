const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
const postRouter = require('./routes/postRouter')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/api/posts', postRouter)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: true,
}).then(() => console.log('Database Connection Successful'));

app.listen(port, () => {
    console.log(`App Started On Port: ${port}`)
})