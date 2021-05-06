import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages'
import Home from '@/pages/index/home'
import Register from '@/pages/index/register'
import Season1 from '@/pages/index/season1'
import Season2 from '@/pages/index/season2'
import HallFame from '@/pages/index/hallfame'
import News from '@/pages/index/news'
import NewsDetail from '@/pages/index/newsdetail'
import Rules from '@/pages/index/rules'
import FAQ from '@/pages/index/faq'
import Terms from '@/pages/index/terms'
import ContactUs from '@/pages/index/contactus'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '',
      name: '',
      redirect: '/home'
    },
    {
      path: 'home',
      name: 'Home',
      component: Home
    },
    {
      path: 'register',
      name: 'Register',
      component: Register
    },
    {
      path: 'participants',
      name: 'Participants',
      redirect: 'participants/season1'
    },
    {
      path: 'participants/season1',
      name: 'Participants-season1',
      component: Season1
    },
    {
      path: 'participants/season2',
      name: 'Participants-season2',
      component: Season2
    },
    {
      path: 'hallfame',
      name: 'HallFame',
      component: HallFame
    },
    {
      path: 'news',
      name: 'News',
      component: News
    },
    {
      path: 'newsdetail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: 'rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: 'faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: 'terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: 'contactus',
      name: 'ContactUs',
      component: ContactUs
    }
    ]
  },
  {
    path: '/login',
    beforeEnter (to, from, next) {
      window.location = 'https://www.yamisok.com/login'
    }

  },
  {
    path: '/register',
    beforeEnter (to, from, next) {
      window.location = 'https://localhost:8080/register'
    }
  }
  ],
  mode: 'history',
  scrollBehavior () {
    document.getElementById('app').scrollIntoView({
      behavior: 'auto'
    })
  }
})
