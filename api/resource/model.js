const db = require('../../data/dbConfig')

async function insertResource(resourceData) {
    return db('resources').insert(resourceData)
        .then(([resource_id]) => {
            return db('resources').where('resource_id', resource_id).first()
        })
}

async function getAllResources() {
    return await db('resources')
}

module.exports = {
    insertResource,
    getAllResources
}