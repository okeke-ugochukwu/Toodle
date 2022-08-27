
import { createStore } from 'vuex'

var store = createStore({
    state() {
        return { //#DS-101, myDocs.txt
            allTasksContainer: { 
                allTasks: {
                   
                } 
            },


            tasksCatgColors: {
                catgs: { 
                    
                }
            },

            colorGen() {
                //using rgb color code format

                var catgColor = []; 

                for (let i = 0; i < 3 ; i++) { 
                    catgColor.push(    Math.floor( Math.random() * (255 - 0) )     )
                }


                return catgColor;
            },


            selectedCatg: null,

            percentageComplete: null,

            modalStatus: false,

            sideBarStatus: false,

            username: 'Ugoo',

           
        }
    },

    actions: {
        initializeTaskDeletion({ getters, commit }, task) {
            var tasksNoCatgs = getters.allTasksNoCatgs;

            //put the task passed into the action(task to be deleted) and..
            //the array of tasks to be looped through into one object
            //then pass the object as a payload in the mutation

            var zipContainer = {
                allTasksNoCatgs: tasksNoCatgs,
                taskToBeDeleted: task
            };

            commit('deleteTask', zipContainer);
        }

            //update to future maintainer (prolly myself)
            //I don't remember why I went this route, I may have been high on cavy music
            //But as basic as it looks, it's pretty important 
            //no touch abeg.
    },
    

    mutations: {
        addNewTask(state, taskObject) {

            //if the object holding the task categories (state.allTasksContainer.allTasks) is empty..
            //assign the object to a fresh object
            //In that fresh object create a property named after the category property of the 'taskObject' passed into the function
            //create a new array, add the 'taskObject' to it and assign it as the value of the just created property

            //create a random color code and repeat the same procedure above to add it to color code storage (tasksCatgColors)
            //creation and assigning of a new Object is the trigger vue's reactivity system

            if (Object.keys(state.allTasksContainer.allTasks).length == 0) {

                //Refer to src/myDocs Ref-101 for the explanation of this logic   
                
                //create category and add task
                var theTasks =  state.allTasksContainer.allTasks = Object.defineProperty({}, taskObject.category, {
                    value: new Array(taskObject),
                    configurable: true,
                    enumerable: true,
                    writable: true
                });

                state.allTasksContainer = Object.defineProperty({}, 'allTasks', {
                    value: theTasks,
                    configurable: true,
                    enumerable: true,
                    writable: true
                })


                //create & add color code of the same category to the color code storage {tasksCatgColor}
                let taskObjectCatgColor = state.colorGen();

                var tasksColors = state.tasksCatgColors.catgs = Object.defineProperty({}, taskObject.category, {

                    value: 'rgb(' + taskObjectCatgColor[0] + ',' +  taskObjectCatgColor[1] + ',' + taskObjectCatgColor[2] + ')',
                    configurable: true,
                    enumerable: true,
                    writable: true

                })

                state.tasksCatgColors = Object.defineProperty({}, 'catgs', {
                    value: tasksColors,
                    configurable: true,
                    enumerable: true,
                    writable: true
                } )
            

            }
            else {

                for (const category in state.allTasksContainer.allTasks) {

                    // check if the catgory inputed by the user already exits
                    if (state.allTasksContainer.allTasks.hasOwnProperty.call(state.allTasksContainer.allTasks, taskObject.category)) {

                        var categoryToBeModified = taskObject.category //this is just a string

                        //if it does, add taskObject(the new task) to the category and stop the loop
                        state.allTasksContainer.allTasks[categoryToBeModified].push(taskObject);

                        console.log(category)
                        break;
                    }

                    else {

                        // var theTasks = state.allTasksContainer.allTasks = Object.assign({}, 0)

                        
                        //get already existing object holding all tasks
                        var alreadyExistingTasksList = state.allTasksContainer.allTasks

                        //create new category (and add the 'taskObject') by modifing 'alreadyExistingTasksList'
                        Object.defineProperty(alreadyExistingTasksList, taskObject.category, {
                            value: new Array(taskObject),
                            configurable: true,
                            enumerable: true,
                            writable: true
                        })

                        //reassign the object's container to a fresh object containing the object (object holding all task categories) above as its property
                        state.allTasksContainer = Object.defineProperty({}, 'allTasks', {
                            value: alreadyExistingTasksList,
                            configurable: true,
                            enumerable: true,
                            writable: true
                        })



                        //In the same manner create color code for the new taskObject's category and add it to the 
                        //color code storage (tasksCatgColors) using th same procedure above

                        let taskObjectCatgColor = state.colorGen();

                        var alreadyExistingColorStorage = state.tasksCatgColors.catgs;

                        Object.defineProperty(alreadyExistingColorStorage, taskObject.category, {

                            value: 'rgb(' + taskObjectCatgColor[0] + ',' +  taskObjectCatgColor[1] + ',' + taskObjectCatgColor[2] + ')',
                            configurable: true,
                            enumerable: true,
                            writable: true

                        })

                        state.tasksCatgColors = Object.defineProperty({}, 'catgs', {
                            value: alreadyExistingColorStorage,
                            configurable: true,
                            enumerable: true,
                            writable: true
                        })


                        break;
                    }

                }
            }

        },

        deleteTask(state, zipContainer) {

            //get the category of the task to be deleted
            var categoryToBeModified = zipContainer.taskToBeDeleted.category

            //loop through that category (array) and find the task to be delected by checking the 'descr'
            state.allTasksContainer.allTasks[categoryToBeModified].forEach(task => {
                if (task.descr == zipContainer.taskToBeDeleted.descr) {

                    //get the index of the match in the array
                    var indexOfMatch = state.allTasksContainer.allTasks[categoryToBeModified].indexOf(task)

                    //remove the task from the array
                    state.allTasksContainer.allTasks[categoryToBeModified].splice(indexOfMatch, 1)

                    //if the task removed is the last in the array (category), delete the category
                    if (state.allTasksContainer.allTasks[categoryToBeModified].length == 0) {
                        delete state.allTasksContainer.allTasks[categoryToBeModified]
                    }
                }
            });

        },

        setselectedCatgFilter(state, selectedCatg) {
            state.selectedCatg = selectedCatg;
        },

        setPercentageComplete(state, percentageRecieved) {
            state.percentageComplete = percentageRecieved;
        },

        toggleModal(state) {
            if(state.modalStatus === false) {
                state.modalStatus = true;
            }
            else {
                state.modalStatus = false;
            }
        },

        toggleSideBar(state) {
            if(state.sideBarStatus === false) {
                state.sideBarStatus = true;
            }
            else {
                state.sideBarStatus = false;
            }
        }
    },


    getters: {
        allTasksNoCatgs(state) {
            return [].concat.apply([], Object.values(state.allTasksContainer.allTasks));
        },

        completedTasks(state, getters) {
            console.log(state)
            var taskCount = 0;

            getters.allTasksNoCatgs.forEach(task => {
                if (task.status == true) {
                    taskCount++
                }
            });

            return taskCount;
        },

        uncompletedTasks(state, getters) {
            console.log(state)
            var taskCount = 0;

            getters.allTasksNoCatgs.forEach(task => {
                if (task.status == false) {
                    taskCount++
                }
            });

            return taskCount;
        }
    }

});

export default store;
