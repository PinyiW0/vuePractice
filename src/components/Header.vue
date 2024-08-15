<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Vue Practice</el-menu-item>
    <el-sub-menu index="2">
      <template #title>練習</template>
      <el-menu-item index="2-1">
        <RouterLink to="/one">練習一</RouterLink>
      </el-menu-item>
      <el-menu-item index="2-2">
        <RouterLink to="/two">練習二</RouterLink>
      </el-menu-item>
      <el-menu-item index="2-3">
        <RouterLink to="/three">練習三</RouterLink>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
