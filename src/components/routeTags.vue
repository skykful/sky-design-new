<template>
  <el-row class="route-tags" justify="space-between" center="middle">
    <div>
      <el-tag
        v-for="(item, index) in tags"
        :key="item.name"
        size="small"
        :closable="item.routeName !== 'homepage'"
        :effect="item.routeName === route.name ? 'dark' : 'light'"
        :type="item.routeName === route.name ? 'primary' : 'info'"
        @click="handleChoseRoute(index)"
        @close.stop="handleClose(index)"
        >{{ item.name }}</el-tag
      >
    </div>
    <div>
      <el-tooltip class="box-item" effect="dark" content="刷新当前页面" placement="left">
        <el-button link type="primary" @click="handleRefresh"
          ><el-icon><Refresh /></el-icon
        ></el-button>
      </el-tooltip>

      <el-button link type="primary" @click="handleCloseAll">全部关闭</el-button>
    </div>
  </el-row>
</template>

<script lang="ts" setup name="">
import { Refresh } from '@element-plus/icons-vue'
import type { TagProps } from 'element-plus'

interface TagsItem {
  name: string
  routeName: string
  type?: TagProps['type']
}
const route = useRoute()
const router = useRouter()

const defaultTag: TagsItem = {
  name: '首页',
  routeName: 'homepage'
}

const tags = ref<TagsItem[]>([defaultTag])

watch(
  route,
  (val) => {
    let found = tags.value.find((tag: TagsItem) => tag.routeName === val.name)
    if (!found) {
      tags.value.push({
        name: val.meta.title,
        routeName: val.name
      } as TagsItem)
    }
  },
  {
    immediate: true
  }
)

const handleChoseRoute = (index: number) => {
  const tag = tags.value[index]
  router.push({ name: tag.routeName })
}

const handleRefresh = () => {
  console.log('refresh')
}

const handleClose = (index: number) => {
  tags.value.splice(index, 1)
  handleChoseRoute(index - 1)
}

const handleCloseAll = () => {
  tags.value = [defaultTag]
  handleChoseRoute(0)
}
</script>

<style lang="less">
.route-tags {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #eee;
  padding: 5px;
  .el-tag {
    cursor: pointer;
    & + .el-tag {
      margin-left: 8px;
    }
  }
}
</style>
