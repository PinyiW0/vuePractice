<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <RouterLink to="/home">
        <el-menu-item index="1">
          Vue Practice
        </el-menu-item>
      </RouterLink>
      <el-sub-menu index="2">
        <template #title>練習</template>
        <RouterLink to="/one">
          <el-menu-item index="2-1">
            練習一
          </el-menu-item>
        </RouterLink>
        <RouterLink to="/two">
          <el-menu-item index="2-2">
            練習二
          </el-menu-item>
        </RouterLink>
        <RouterLink to="/three">
          <el-menu-item index="2-3">
            練習三
          </el-menu-item>
        </RouterLink>
        <RouterLink to="/four">
          <el-menu-item index="2-4">
            練習四
          </el-menu-item>
        </RouterLink>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped></style>
