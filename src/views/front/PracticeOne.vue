<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Edit, Check, Close } from '@element-plus/icons-vue';
// #region 定義資料
interface Drink {
  id: string;
  drinkName: string;
  price: number;
  inventory: number;
  content: string;
  isEdit?: Boolean;
};

interface EditingDrink extends Drink {
  isEdit: boolean;
}

const editDrink = reactive<Drink>({
  id: '',
  drinkName: '',
  price: 0,
  inventory: 0,
  content: ''
});

/** 飲品清單 */
const drinksList = ref<Drink[]>([
  { id: '1', drinkName: '珍珠奶茶', price: 50, inventory: 99, content: '香濃奶茶搭配QQ珍珠', isEdit: false },
  { id: '2', drinkName: '冬瓜檸檬', price: 45, inventory: 18, content: '清新冬瓜配上新鮮檸檬', isEdit: false },
  { id: '3', drinkName: '翡翠檸檬', price: 55, inventory: 20, content: '綠茶與檸檬的完美結合', isEdit: false },
  { id: '4', drinkName: '四季春茶', price: 45, inventory: 10, content: '香醇四季春茶，回甘無比', isEdit: false },
  { id: '5', drinkName: '阿薩姆奶茶', price: 50, inventory: 25, content: '阿薩姆紅茶搭配香醇鮮奶', isEdit: false },
  { id: '6', drinkName: '檸檬冰茶', price: 45, inventory: 20, content: '檸檬與冰茶的清新組合', isEdit: false },
  { id: '7', drinkName: '芒果綠茶', price: 55, inventory: 1, content: '芒果與綠茶的獨特風味', isEdit: false },
  { id: '8', drinkName: '抹茶拿鐵', price: 60, inventory: 20, content: '抹茶與鮮奶的絕配', isEdit: false },
]);
// #endregion

/** 變更價格 */
const handleValue = (value: any, type: 'price' | 'inventory', min:number, max:number) => {
  editDrink[type] = Math.min(Math.max(value, min), max);
}

/** 編輯 */
const handleEdit = (drink: EditingDrink) => {
  Object.assign(editDrink, drink);
  drink.isEdit = true;
}

/** 儲存 */
const handleSave = (drink: Drink) => {
  Object.assign(drink, editDrink)
  drink.isEdit = false
}
</script>

<template>
  <div class="w-full px-10">
    <div class="p-5">
      <h1>Drinks</h1>
      <p class="text-sm"><strong>規則: </strong> <strong>1.</strong>可編輯所有欄位 <strong>2.</strong> 價格最低10元最高120元，調整間距為 5 元 <strong>3.</strong>庫存最少最少為 0 最多為 100</p>
    </div>
    <el-table :data="drinksList" border>
      <el-table-column label="品項" width="160" align="center">
        <template #default="{ row }">
          <span v-if="!row.isEdit">{{ row.drinkName }}</span>
          <el-input v-else v-model="editDrink.drinkName" />
        </template>
      </el-table-column>
      <el-table-column prop="content" label="描述" min-width="200" align="left">
        <template #default="{ row }">
          <span v-if="!row.isEdit">{{ row.content }}</span>
          <el-input v-else v-model="editDrink.content" />
        </template>
      </el-table-column>
      <el-table-column prop="price" label="價格" width="180" align="center">
        <template #default="{ row }" class="flex gap-5">
          <span v-if="!row.isEdit" class="text-base"><strong>{{ row.price }}</strong></span>
          <el-input-number v-else @input="handleValue($event,'price', 10, 100)" v-model="editDrink.price" :min="10" :max="120" :step="5"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="inventory" label="庫存" width="200" align="center">
        <template #default="{ row }" class="flex gap-5">
          <span v-if="!row.isEdit" class="text-base"><strong>{{ row.inventory }}</strong></span>
          <el-input-number v-else @input="handleValue($event, 'inventory', 0, 50)" v-model="editDrink.inventory" :min="0" :max="100" :step="1"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template #default="{ row }">
          <el-button v-if="!row.isEdit" :icon="Edit" @click="handleEdit(row)" />
          <template v-else class="flex gap-2">
            <el-button @click="row.isEdit = false" :icon="Close" type="info" plain class="p-2" />
            <el-button @click="handleSave(row)" :icon="Check" type="success" plain class="p-2" />
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
