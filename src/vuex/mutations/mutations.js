export default {
    SET_ITEMS_TO_STATE(state, products) {
        state.products = products
    },
    SET_REVIEWS_TO_STATE(state, reviews) {
        state.reviews = reviews
    },
    SET_ITEM_TO_CART(state, itemID) {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === itemID) {
                state.cart.push(state.products[i])
            }
        }
    },
    DELETE_CART_ITEM(state, itemID) {
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === itemID) {
                state.cart.splice(i, 1)

            }
        }
    }
}