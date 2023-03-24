import { createStore } from "vuex";
import journal  from '../Modules/daybook/store/jounal/index'

// Create a new store instance.
const store = createStore({
    // es modular esto viene del modulo de daybokk
    modules:{
        journal,
    }
 
});

export default store;
