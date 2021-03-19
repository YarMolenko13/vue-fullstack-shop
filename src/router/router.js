import Vue from 'vue'
import Router from 'vue-router'

import vHome from './../components/home/v-home'
// import vWatches from './../components/watches/v-watches'

Vue.use(Router)


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome,
            meta: { title: 'Timpus' }
        },
        {
            path: '/watches',
            name: 'watches',
            meta: {title: 'Timpus | watches'},
            component: () => import ('./../components/watches/v-watches')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

export default router;