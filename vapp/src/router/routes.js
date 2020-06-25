import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/components/Home'
import About from '@/components/About'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

const routes = [{
    path: '/',

    // we use /src/layouts/User component which is imported above
    component: App,

    // hey, it has children routes and User has <router-view> in it;
    // It is really a Layout then!
    children: [
        // Profile page
        {
            path: 'home', // here it is, route /user/profile
            component: Home // we reference /src/pages/Profile.vue imported above
        },
        {
            path: 'about', // here it is, route /user/profile
            component: About // we reference /src/pages/Profile.vue imported above
        },
        // Posts page
        {
            path: '*', // here it is, route /user/posts
            component: PageNotFound // we reference /src/pages/Posts.vue imported above
        }
    ]
}]

export default routes