<template>
  <el-aside :width="width">
    <el-scrollbar height="450px">
      <el-menu :default-active="route.name" :collapse="isCollapse" @select="handleSelect">
        <el-menu-item index="homepage">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="userCenter">
          <template #title>
            <el-icon><User /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="userInfo">
            <template #title>
              <span>用户信息</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="userManager">
          <template #title>
            <el-icon><List /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="userList">
            <template #title>
              <span>用户列表</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="articleCenter">
          <template #title>
            <el-icon><Notebook /></el-icon>
            <span>文章中心</span>
          </template>
          <el-menu-item index="articleManage">
            <template #title>
              <span>文章管理</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="authoriteManage">
          <el-icon><Link /></el-icon>
          <span>权限管理</span>
        </el-menu-item>
        <el-menu-item index="questions">
          <el-icon><QuestionFilled /></el-icon>
          <span>常见问题</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>

    <el-switch v-model="isCollapse" />
  </el-aside>
</template>

<script lang="ts" setup name="">
import { HomeFilled, User, List, Notebook, QuestionFilled, Link } from '@element-plus/icons-vue'
import { useToggleSideStore } from '@/stores/toggleSide'

const route = useRoute()
const router = useRouter()
const width = ref<string>('200px')
const { isCollapse } = storeToRefs(useToggleSideStore())

watch(
  isCollapse,
  (val: boolean) => {
    if (!val) {
      width.value = '200px'
    } else {
      width.value = 'auto'
    }
  },
  {
    immediate: true
  }
)

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key === 'questions') {
    window.open('https://element-plus.org/zh-CN/component/link.html', '_blank')
  } else {
    router.push({ name: key })
  }
}
</script>

<style lang="less">
.el-aside {
  border-right: 1px solid #eee;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  .el-scrollbar {
    width: 100%;
    .el-menu {
      border: none;
    }
  }

  .el-switch {
    margin-bottom: 50px;
  }
}
</style>
