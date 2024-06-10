<template>
  <el-form ref="ruleFormRef" :model="formData" :rules="rules" label-width="100px" status-icon>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password" show-password placeholder="请输入登录密码" />
    </el-form-item>
    <el-form-item>
      <el-row justify="space-between" style="width: 100%">
        <el-checkbox v-model="formData.remember" label="记住密码" />
        <el-link type="primary">忘记密码？</el-link>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm"> 登 录 </el-button>
      <el-button @click="resetForm">重 置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="">
import { reactive, ref, toRaw } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

interface FormData {
  username: string
  password: string
  remember: boolean
}

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const formData = reactive<FormData>({
  username: 'admin',
  password: 'sky2024',
  remember: true
})

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 20,
      message: '用户名长度在3~20之前',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 20,
      message: '密码长度在3~20之前',
      trigger: 'blur'
    }
  ]
})

const submitForm = () => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log('submit!', toRaw(formData))
      ElMessage({
        message: '登录成功，欢迎回来。',
        type: 'success'
      })
      router.push('/mine/homepage')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = () => {
  ruleFormRef.value?.resetFields()
}
</script>

<style lang="less">
.el-form {
  width: 90%;
}
</style>
