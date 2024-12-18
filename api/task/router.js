const router = require('express').Router()
const Tasks = require('./model')

// [POST] /api/tasks
// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}
router.post('/', (req, res, next) => {
    const taskData = req.body

    Tasks.insertTask(taskData)
        .then(tasks => {
            res.status(201).json(tasks)
        })
        .catch(next)
})

// [GET] /api/tasks
// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Each task must include project_name and project_description
// Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]
router.get('/', (req, res, next) => {
    Tasks.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router