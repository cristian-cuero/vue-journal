import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//para que use boostrap
import './style/styles.scss'
createApp(App)
.use(store)
.use(router).mount('#app')
