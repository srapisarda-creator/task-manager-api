const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server up on ' + port)
})





// /Users/sergi/mongodb/bin/mongod.exe --dbpath=/Users/sergi/mongodb-data
// node src/index.js
