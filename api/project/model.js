const db = require('../../data/dbConfig')

async function insertProject(projectData) {
    return db('projects').insert(projectData)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id).first()
                .then(row => {
                    if (row.project_completed === 1) {
                        row.project_completed = true
                    } else { row.project_completed = false}
                    return row
                })
        })
}

async function getAllProjects() {
    const projectData = await db('projects')

    projectData.forEach(row => {
        if (row.project_completed === 1) {
            row.project_completed = true
        } else { row.project_completed = false}
    })

    return projectData
}

module.exports = {
    insertProject,
    getAllProjects
}