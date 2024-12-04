const projects = [
    {project_name: "Build a Shed", project_description: "Construct a backyard storage shed.", project_completed: false},
    {project_name: "Plant a Garden", project_description: "Create a vegetable and flower garden.", project_completed: false},
    {project_name: "Build a Bookshelf", project_description: "A wooden bookshelf for the living room.", project_completed: false},
]

const resources = [
    {resource_name: "Cement", resource_description: "Used for creating the foundation."},
    {resource_name: "Shovel", resource_description: "For spreading cement."},
    {resource_name: "Wood planks", resource_description: null},
    {resource_name: "Roofing tiles", resource_description: "For the shed roof."},
    {resource_name: "Compost", resource_description: "Enriches the soil."},
    {resource_name: "Vegetable seeds", resource_description: "Seeds for tomatoes, carrots, and lettuce."},
    {resource_name: "Watering can", resource_description: "For watering the seeds."},
    {resource_name: "Fence panels", resource_description: "Protects the garden from animals."},
    {resource_name: "Hammer", resource_description: "For assembling the frame."},
    {resource_name: "Nails", resource_description: "For holding the frame together."},
    {resource_name: "Varnish", resource_description: "For a smooth and shiny finish."},
]

const tasks = [
    // Build a Shed
    {task_description: "Lay the foundation", task_notes: "Use concrete and level it properly.", task_completed: true, project_id: 1},
    {task_description: "Assemble the frame", task_notes: null, task_completed: false, project_id: 1},
    {task_description: "Install the roof", task_notes: "Ensure proper alignment.", task_completed: false, project_id: 1},

    // Plant a Garden
    {task_description: "Prepare the soil", task_notes: "Remove weeds and add compost.", task_completed: false, project_id: 2},
    {task_description: "Plant seeds", task_notes: "Water immediately after planting.", task_completed: false, project_id: 2},
    {task_description: "Install garden fence", task_notes: null, task_completed: false, project_id: 2},

    // Build a Bookshelf
    {task_description: "Cut the wood", task_notes: "Measure twice, cut once.", task_completed: false, project_id: 3},
    {task_description: "Assemble the frame", task_notes: null, task_completed: false, project_id: 3},
    {task_description: "Apply varnish", task_notes: "Use a brush for even coating.", task_completed: false, project_id: 3}
]

const project_resources = [
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2},
    {project_id: 1, resource_id: 3},
    {project_id: 1, resource_id: 4},
    {project_id: 2, resource_id: 5},
    {project_id: 2, resource_id: 6},
    {project_id: 2, resource_id: 7},
    {project_id: 2, resource_id: 8},
    {project_id: 3, resource_id: 3},
    {project_id: 3, resource_id: 9},
    {project_id: 3, resource_id: 10},
    {project_id: 3, resource_id: 11},
]

exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
};