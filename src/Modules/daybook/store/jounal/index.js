import  state from './state'
import *  as actions  from './actions'
import * as getters from './getters'
import * as mutations from './mutattion'
7//este incdex es el que se va a mi global 
const journalModule = {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}

export default journalModule 