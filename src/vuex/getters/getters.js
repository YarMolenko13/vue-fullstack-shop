export default {
    GET_PRODUCTS_FROM_STATE(state) {
        return state.products
    },
    GET_REVIEWS_FROM_STATE(state) {
        return state.reviews
    },
    GET_CART_ITEMS_FROM_STATE(state) {
        return state.cart
    }
}