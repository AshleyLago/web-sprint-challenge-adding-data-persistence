const router = require('express').Router()
const Resources = require('./model')

// [POST] /api/resources
// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
router.post('/', (req, res, next) => {
    const resourceData = req.body

    Resources.insertResource(resourceData)
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(next)
})

// [GET] /api/resources
// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
router.get('/', (req, res, next) => {
    Resources.getAllResources()
        .then(resources => {
            res.status(200).json(resources)
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