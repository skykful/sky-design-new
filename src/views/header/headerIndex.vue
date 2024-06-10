<template>
  <span class="header-info">
    <logo />
    <breadcrumb class="header-bread" />
  </span>
  <span class="user-ope">
    <el-tooltip class="box-item" effect="dark" content="点击切换暗黑模式" placement="bottom">
      <el-button circle @click="darkStore.changeMode">
        <el-icon>
          <Moon v-show="darkStore.isDark" />
          <Sunny v-show="!darkStore.isDark" />
        </el-icon>
      </el-button>
    </el-tooltip>

    <el-tooltip class="box-item" effect="dark" content="点击进入全屏模式" placement="bottom">
      <el-button circle @click="toggle"
        ><el-icon><FullScreen /></el-icon
      ></el-button>
    </el-tooltip>

    <el-tooltip class="box-item" effect="dark" content="通知" placement="bottom">
      <el-button circle
        ><el-icon><Bell /></el-icon
      ></el-button>
    </el-tooltip>

    <el-tooltip class="box-item" effect="dark" content="设置" placement="bottom">
      <el-button circle
        ><el-icon><Setting /></el-icon
      ></el-button>
    </el-tooltip>

    <avatarDrop />
  </span>
</template>

<script lang="ts" setup name="">
import logo from '@/components/logo.vue'
import breadcrumb from '@/components/breadcrumb.vue'
import { Moon, Sunny, Bell, FullScreen, Setting } from '@element-plus/icons-vue'
import avatarDrop from '@/components/avatarDrop.vue'
import { useDarkStore } from '@/stores/darkMode'
import { useFullscreen } from '@vueuse/core'

const darkStore = useDarkStore()
const { toggle } = useFullscreen(document.getElementsByTagName('html')[0])
</script>

<style lang="less" scoped>
.header-info {
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  .el-breadcrumb {
    margin-left: 50px;
  }
}
.user-ope {
  .el-button + .el-button,
  .el-button + .el-dropdown {
    margin-left: 25px;
  }
}
</style>
