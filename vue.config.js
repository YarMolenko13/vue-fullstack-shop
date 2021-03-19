// vue.config.js
module.exports = {
    // https://cli.vuejs.org/config/#devserver-proxy
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "/assets/styles/style.scss";`
            }
        }
    },
    pwa: {
        iconPaths: {
            favicon32: "./src/assets/images/f1.png",
            favicon16: "./src/assets/images/f1.png",
            appleTouchIcon: "./src/assets/images/f1.png",
            maskIcon: "./src/assets/images/f1.png",
            msTileImage: "./src/assets/images/f1.png"
        }
    }
}