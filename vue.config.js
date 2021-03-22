// vue.config.js
module.exports = {
    // // https://cli.vuejs.org/config/#devserver-proxy
    // devServer: {
    //     port: 3000,
    //     proxy: {
    //         '/': {
    //             target: 'https://full-stack-shop-api.herokuapp.com',
    //             ws: true,
    //             changeOrigin: true
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "/assets/styles/style.scss";`
            }
        }
    }
}