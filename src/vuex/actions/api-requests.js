import axios from "axios";

export default {
    GET_ITEMS_FROM_DB({commit}) {
        return axios('/api/get-all-items')
            .then((product) => {
                commit('SET_ITEMS_TO_STATE', product.data)
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    GET_ITEM_REVIEWS({commit}, itemId) {
        return axios.get('api/get-need-reviews?itemId=' + itemId)
            .then((reviews) => {
            commit('SET_REVIEWS_TO_STATE', reviews.data)
        })
    },
    // ADD_REVIEW() {
    //     re
    // }
}