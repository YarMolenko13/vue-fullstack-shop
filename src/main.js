import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router.js'

import './assets/styles/style.css'
import './assets/styles/style.scss'
import './assets/styles/bootstrap.css'

import 'material-design-icons-iconfont'

Vue.config.productionTip = false

const MY_BASE_URL = 'https://full-stack-shop-api.herokuapp.com/'
const INDEXED_DB_NAME = 'CartDb'

// let dbOpenDBRequest = indexedDB.open(INDEXED_DB_NAME, 1);
// let db
//
// db = dbOpenDBRequest.result
// if (!db.objectStoreNames.contains('cart_items')) {
//   db.createObjectStore('cart_items', { keyPath: 'id', autoIncrement: true })
// }



// dbOpenDBRequest = indexedDB.open(INDEXED_DB_NAME, 2);
//
// dbOpenDBRequest.onsuccess = function() {
//   db = dbOpenDBRequest.result
//   if (!db.objectStoreNames.contains('cart_items')) {
//     db.createObjectStore('cart_items', { keyPath: 'id', autoIncrement: true })
//   }
//   let tx = db.transaction('cart_items', 'readwrite')
//   objectStore('CartDb').put({'Yaroslav': true, 'Molodcov': 'yes'})
//
//   console.log(db.transaction('cart_items').objectStore('cart_items').getAll())
// }


// dbOpenDBRequest.onerror = function(event) {
//   alert("Почему Вы не позволяете моему веб-приложению использовать IndexedDB?!");
// };
// dbOpenDBRequest.onsuccess = function(event) {
//   db = event.target.result;
// };
// dbOpenDBRequest.onupgradeneeded = function(event) {
//   db = event.target.result;
//   let objectStore = db.createObjectStore("cart_items", { keyPath: "id", autoIncrement: true });
// }


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

export default MY_BASE_URL

