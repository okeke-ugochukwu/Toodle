
import { createStore } from 'vuex'

var store = createStore({
    state() {
        return {
            allTasksContainer: { allTasks: {
                'miscellaneous':  [
                    {
                        id: 80,
                        category: 'miscellaneous',
                        descr: 'Get an external monitor',
                        status: false,
                        editStatus: false,
                        editButtonStatus: true
                    },

                    {
                        id: 90,
                        category: 'miscellaneous',
                        descr: 'Buy mattress. 4ft * 6ft * 1ft',
                        status: false,
                        editStatus: false,
                        editButtonStatus: true
                    },

                    {
                        id: 100,
                        category: 'miscellaneous',
                        descr: 'Order some palletes',
                        status: false,
                        editStatus: false,
                        editButtonStatus: true
                    },

                    {
                        id: 100,
                        category:'miscellaneous',
                        descr: 'Order some palletes',
                        status: false,
                        editStatus: false,
                        editButtonStatus: true
                    }
                ]
             } },

            selectedCatg: null,

            percentageComplete: null,

            modalStatus: false,

            sideBarStatus: false
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
    },

    mutations: {
        addNewTask(state, taskObject) {

            //if the object holding the task categories (state.allTasksContainer.allTasks) is empty..
            //assign the object to a fresh object
            //In that fresh object create a property named after the category property of the 'taskObject' passed into the function
            //create a new array, add the 'taskObject' to it and assign it as the value of the just created property
            //creation and assigning of a new Object is the trigger vue's reactivity system

            if (Object.keys(state.allTasksContainer.allTasks).length == 0) {

                //Refer to src/myDocs Ref-101 for the explanation of this logic

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

                        //create new category (and add the 'taskObject') by modifing the object
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

                    }

                }
            }

        },

        deleteTask(state, zipContainer) {

            //get the category of the task to be deleted
            var categoryToBeModified = zipContainer.taskToBeDeleted.category

            //loop through the category (array) and find the task to be delected by checking the 'descr'
            state.allTasksContainer.allTasks[categoryToBeModified].forEach(task => {
                if (task.descr == zipContainer.taskToBeDeleted.descr) {

                    //get the index of the match in the array
                    var indexOfMatch = state.allTasksContainer.allTasks[categoryToBeModified].indexOf(task)

                    //remove the task from the array
                    state.allTasksContainer.allTasks[categoryToBeModified].splice(indexOfMatch, 1)
                }
            });

        },

        setselectedCatgFilter(state, selectedCatg) {
            state.selectedCatg = selectedCatg;
        },

        updateAllTasks(state, tasks) {
            state.allTasks = tasks;
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
    }

});

export default store;

    //#1
    //Each task is an object, placed in its parent (task category) which an array of all tasks of the same type.

    //All task categorises are an item in thier parent, an ojbect

    //I adopted this method to see that each task is an object, and so task categories can be named