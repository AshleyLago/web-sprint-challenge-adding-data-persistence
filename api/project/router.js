const router = require('express').Router()
const Projects = require('./model')



// [POST] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
router.post('/', (req, res, next) => {
    const projectData = req.body

    Projects.insertProject(projectData)
        .then(projs => {
            res.status(201).json(projs)
        })
        .catch(next)
})

// [GET] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
router.get('/', (req, res, next) => {
    Projects.getAllProjects()
        .then(projs => {
            res.status(200).json(projs)
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