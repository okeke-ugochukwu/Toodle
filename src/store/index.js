import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      allTasks: [ //#1
            {
                'bussiness': [

                    {
                        id: 10,
                        type: 'bussiness',
                        descr: 'Make new connections',
                        status: false,
                    },

                    {
                        id: 20,
                        type: 'bussiness',
                        descr: 'Send out some applications',
                        status: false,
                    },

                    {
                        id: 30,
                        type: 'bussiness',
                        descr: 'Contact ZhinChao',
                        status: false,
                    }

                ],

                'personal':  [

                    {
                        id: 40,
                        type: 'personal',
                        descr: 'Commit some code',
                        status: false,
                    },

                    {
                        id: 50,
                        type: 'personal',
                        descr: 'Make pen for sharighan animation',
                        status: false,
                    },

                      {
                        id: 60,
                        type: 'personal',
                        descr: 'Hit the gym',
                        status: false,
                    },

                      {
                        id: 70,
                        type: 'personal',
                        descr: 'Go Battle Royale',
                        status: false,
                    }
                ],

                'miscellaneous':  [
                    {
                        id: 80,
                        type: 'miscellaneous',
                        descr: 'Get an external monitor',
                        status: false,
                    },

                    {
                        id: 90,
                        type: 'miscellaneous',
                        descr: 'Buy mattress. 4ft * 6ft * 1ft',
                        status: false,
                    },

                    {
                        id: 100,
                        type: 'miscellaneous',
                        descr: 'Order some palletes',
                        status: false,
                    },

                    {
                        id: 110,
                        type: 'miscellaneous',
                        descr: 'Order some palletes',
                        status: false,
                    }
                ],
            }
      ],
      selectedCatg: null,
    }
  },

  mutations: {
    setselectedCatgFilter(state, selectedCatg) {
      state.selectedCatg = selectedCatg
    },

    updateAllTasks(state, tasks) {
        state.allTasks = tasks
    }
  },

  getters: {
    allTasksNoCatgs(state) {
        return [].concat.apply([], Object.values(state.allTasks[0]));
    }
  }
});

export default store;

    //#1
    //Each task is an object, placed in its parent (task category) which an array of all tasks of the same type.

    //All task categorises are an item in thier parent, an ojbect
    //which is the only child of its parent (all task categoris), an array

    //I adopted this method to see that each task is an object, and so task categories can be named