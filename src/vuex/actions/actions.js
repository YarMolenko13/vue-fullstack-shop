export default {
    ADD_TO_CART({commit}, itemID) {
        return commit('SET_ITEM_TO_CART', itemID)
    },
    DELETE_ITEM_FROM_CART({commit}, itemID) {
        return commit('DELETE_CART_ITEM', itemID)
    }
}