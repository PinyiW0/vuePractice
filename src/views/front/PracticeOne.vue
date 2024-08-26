<script setup lang="ts">
import { ref } from 'vue';
import { Minus, Plus, Edit, Check } from '@element-plus/icons-vue';
interface Drink {
  id: number;
  drinkName: string;
  price: number;
  inventory: number;
  content: string;
  isEdit: Boolean;
  tempName: string;
  tempContent: string;
};
/** 飲品清單 */ //修改儲存的地方-> 
const drinksList = ref<Drink[]>([
  { id: 1, drinkName: '珍珠奶茶', price: 50, inventory: 99, content: '香濃奶茶搭配QQ珍珠', isEdit: false, tempName:'', tempContent:'' },
  { id: 2, drinkName: '冬瓜檸檬', price: 45, inventory: 18, content: '清新冬瓜配上新鮮檸檬', isEdit: false, tempName:'', tempContent:'' },
  { id: 3, drinkName: '翡翠檸檬', price: 55, inventory: 20, content: '綠茶與檸檬的完美結合', isEdit: false, tempName:'', tempContent:'' },
  { id: 4, drinkName: '四季春茶', price: 45, inventory: 10, content: '香醇四季春茶，回甘無比', isEdit: false, tempName:'', tempContent:'' },
  { id: 5, drinkName: '阿薩姆奶茶', price: 50, inventory: 25, content: '阿薩姆紅茶搭配香醇鮮奶', isEdit: false, tempName:'', tempContent:'' },
  { id: 6, drinkName: '檸檬冰茶', price: 45, inventory: 20, content: '檸檬與冰茶的清新組合', isEdit: false, tempName:'', tempContent:'' },
  { id: 7, drinkName: '芒果綠茶', price: 55, inventory: 18, content: '芒果與綠茶的獨特風味', isEdit: false, tempName:'', tempContent:'' },
  { id: 8, drinkName: '抹茶拿鐵', price: 60, inventory: 20, content: '抹茶與鮮奶的絕配', isEdit: false, tempName:'', tempContent:'' },
]);
// const temp = ref<any>(structuredClone(drinksList)); 所以這應該是後端邏輯
/** 設定最大庫存量 */
const MAX_INVENTORY = 99;

/** 變更庫存數量 */
const changeInventory = (drink:Drink, amount:number) => {
  drink.inventory = Math.max(0, Math.min(MAX_INVENTORY, drink.inventory + amount))
}

/** 開始編輯 */
const startEdit = (drink: Drink) => {
  drink.isEdit = true
  drink.tempName = drink.drinkName
  drink.tempContent = drink.content
}

/** 轉換編輯狀態 */
const toggleEdit = (drink: Drink) => {
  drink.isEdit = !drink.isEdit
}
/** 儲存飲品名稱 */
const handleSave = (drink: Drink)=>{
  drink.isEdit = false
  
}
</script>

<template>
  <div class="w-full px-10">
    <h1 class="p-5">Drinks</h1>
    <el-table :data="drinksList" border>
      <el-table-column prop="drinkName" label="品項" width="200" align="center">
        <template #default="{ row }">
          <div v-if="!row.isEdit" class="flex gap-2 justify-between">
            {{ row.drinkName }}
            <el-button @click="toggleEdit(row)" :icon="Edit" size="small" />
          </div>
          <div v-else class="flex gap-2 justify-between">
            <el-input v-model="row.tempName" size="small" />
            <el-button @click="handleSave(row)" :icon="Check" size="small" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="描述" min-width="200" align="left"/>
      <el-table-column prop="price" label="價格" width="200" align="center">
        <template #default="{ row }" class="flex gap-5">
          <span class="text-base"><strong>{{ row.price }}</strong></span>
        </template>
      </el-table-column>
      <el-table-column prop="inventory" label="庫存" width="200" align="center">
        <template #default="{ row }" class="flex gap-5">
          <el-button @click="changeInventory(row, -1)" :icon="Minus" :disabled="row.inventory <= 0" class="p-2 " />
          <span class="px-4 text-base"><strong>{{ row.inventory }}</strong></span>
          <el-button @click="changeInventory(row, 1)" :icon="Plus" :disabled="row.inventory >= MAX_INVENTORY" class="p-2 " />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
