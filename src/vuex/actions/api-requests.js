import { HTTP } from "../../../http-common";

export default {
    GET_ITEMS_FROM_DB({commit}) {
        return HTTP.get('/api/watch-items/get')
            .then((product) => {
                commit('SET_ITEMS_TO_STATE', product.data)
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    GET_ITEM_REVIEWS({commit}, itemId) {
        return HTTP.get('api/watch-reviews/get?itemId=' + itemId)
            .then((reviews) => {
            commit('SET_REVIEWS_TO_STATE', reviews.data)
        })
    },
    // ADD_REVIEW() {
    //     re
    // }
}