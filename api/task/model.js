const db = require('../../data/dbConfig')

async function insertTask(taskData) {
    return db('tasks').insert(taskData)
        .then(([task_id]) => {
            return db('tasks').where('task_id', task_id).first()
                .then(row => {
                    if (row.task_completed === 1) {
                        row.task_completed = true
                    } else { row.task_completed = false}
                    return row
                })
        })
}

async function getAllTasks() {
    const taskData = await db('tasks')
        .select(
        'tasks.task_id',
        'tasks.task_description',
        'tasks.task_notes',
        'tasks.task_completed',
        'projects.project_name',
        'projects.project_description'
        )
        .join('projects', 'tasks.project_id', '=', 'projects.project_id')

    taskData.forEach(row => {
        if (row.task_completed === 1) {
            row.task_completed = true
        } else { row.task_completed = false}
    })

    return taskData
}

module.exports = {
    insertTask,
    getAllTasks
}