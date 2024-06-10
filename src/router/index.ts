import { createRouter, createWebHistory } from 'vue-router'
import loginIndex from '@/views/login/loginIndex.vue'
import mineIndex from '@/views/mine/mineIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/mine'
    },
    {
      path: '/mine',
      name: 'mine',
      component: mineIndex,
      meta: {
        title: '工作台'
      },
      children: [
        {
          path: '/mine',
          redirect: '/mine/homepage'
        },
        {
          path: '/mine/homepage',
          name: 'homepage',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/home/homepage.vue')
        },
        {
          path: '/mine/user-info',
          name: 'userInfo',
          meta: {
            title: '用户信息'
          },
          component: () => import('@/views/userCenter/userInfo.vue')
        },
        {
          path: '/mine/user-list',
          name: 'userList',
          meta: {
            title: '用户列表'
          },
          component: () => import('@/views/userManage/userList.vue')
        },
        {
          path: '/mine/article-manage',
          name: 'articleManage',
          meta: {
            title: '文章管理'
          },
          component: () => import('@/views/article/articleManage.vue')
        },
        {
          path: '/mine/authorite-manage',
          name: 'authoriteManage',
          meta: {
            title: '权限管理'
          },
          component: () => import('@/views/authorite/authoriteManage.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: loginIndex,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/notFound/notFound.vue'),
      meta: {
        title: '404'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = `${import.meta.env.VITE_PRO_TITLE} — ${to.meta.title || ''}`
  next()
})

export default router
