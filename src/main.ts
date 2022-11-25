import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

createApp(App).use(VXETable).use(router).mount('#app')
