import Vue from 'vue'
import Vuex from 'vuex'

import apiRequests from './actions/api-requests'
import commonActions from "./actions/actions";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: [],
        reviews: []
    },
    mutations,
    actions,
    getters
})

// Для включения json-server : npx json-server --watch db.json

export default store