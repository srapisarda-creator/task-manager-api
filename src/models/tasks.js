const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Tasks', taskSchema)

// const task1 = new Task({ 
//     description: 'Clean room.'  
// })
// task1.save().then((result) => {
//     console.log(result)
// }).catch((error) =>  {
//     console.log(error)
// })

module.exports = Task