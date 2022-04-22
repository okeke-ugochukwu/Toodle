for (const category in state.allTasksContainer.allTasks) {

    // check if the catgory inputed by the user already exits
    if (state.allTasksContainer.allTasks.hasOwnProperty.call(state.allTasksContainer.allTasks, taskObject.category)) {

        //if it does, add taskObject(the new task) to the category and stop the loop
        state.allTask[taskObject.category].push(taskObject);
        console.log(category)
        console.log(taskObject)
        console.log(state.allTasks[0])

        break;

    }
    else {
        var newTaskCategory = taskObject;

        console.log(taskObject)
        console.log(newTaskCategory)
        console.log(state.allTasks)

        Object.defineProperty(state.allTasks, taskObject.category, {
            value: new Array(taskObject),

            enumerable: true,
            writable: true
        })

        // console.log(taskObject)
        // console.log(newTaskCategory)
        // console.log(state.allTasks[0])
        break;