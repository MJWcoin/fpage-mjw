import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

// Todo: Update this when publishing
// import drizzleVuePlugin from '@drizzle/vue-plugin'
//
import drizzleVuePlugin from '@drizzle/vue-plugin'
import drizzleOptions from './drizzleOptions'

import 'quasar'

Vue.use(Vuex)
const store = new Vuex.Store({ state: {} })

Vue.use(drizzleVuePlugin, { store, drizzleOptions })
Vue.config.productionTip = false

// main.js

// This is needed ONLY if NOT chosen to import everything from Quasar
// when you installed vue-cli-plugin-quasar.

import {
    Quasar,
    QLayout,
    QPageContainer,
    QPage,
    QHeader,
    QFooter,
    QDrawer,
    QPageSticky,
    QPageScroller
} from 'quasar'

Vue.use(Quasar, {
    components: {
        QLayout,
        QPageContainer,
        QPage,
        QHeader,
        QFooter,
        QDrawer,
        QPageSticky,
        QPageScroller
    }
})

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')