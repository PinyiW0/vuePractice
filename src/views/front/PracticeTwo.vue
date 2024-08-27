<script setup lang="ts">
import { ref, reactive, computed, nextTick } from 'vue';
import { Edit, Check, Close, Delete } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
// #region 定義資料
interface Drink {
  id: string;
  drinkName: string;
  price: number;
  inventory: number;
  content: string;
  isEdit?: Boolean;
};

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

// 狀態設定
const status = ref<'view' | 'edit' | 'add'>('view');
// 追蹤在編輯的項目索引
const editingIndex = ref<number | null>(null);
const nameInputRef = ref<HTMLInputElement | null>(null);

const isEditing = computed(() => status.value !== 'view');
const valid = computed(() => editDrink.drinkName.trim() !== '' && editDrink.content.trim() !== '');

const handleValue = (value: number, type: 'price' | 'inventory', min: number, max: number) => {
  editDrink[type] = Math.min(Math.max(value, min), max);
};
/** 編輯 */
const startEditing = (drink: Drink, index: number) => {
  Object.assign(editDrink, drink);
  status.value = 'edit';
  editingIndex.value = index;
};
/** 新增 */
const startAdding = () => {
  Object.assign(editDrink, {
    id: (drinksList.value.length + 1).toString(),
    drinkName: '',
    price: 50,
    inventory: 10,
    content: ''
  });
  status.value = 'add';
  editingIndex.value = 0;
  drinksList.value.unshift({ ...editDrink, isEdit: true });
  nextTick(() => nameInputRef.value?.focus());
};
/** 儲存 */
const handleSave = () => {
  if (!valid.value) {
    ElMessage.error('品項名稱和描述內容為必填');
    return;
  }
  if (status.value === 'add') {
    drinksList.value[0] = { ...editDrink, isEdit: false };
  } else if (editingIndex.value !== null) {
    Object.assign(drinksList.value[editingIndex.value], editDrink);
  }
  status.value = 'view';
  editingIndex.value = null;
  ElMessage.success('保存成功');
};
/** 取消 */
const handleCancel = () => {
  const cancelAction = () => {
    if (status.value === 'add') {
      drinksList.value.shift();
    }
    status.value = 'view';
    editingIndex.value = null;
  };

  if (valid.value) {
    ElMessageBox.confirm('您確定要取消編輯嗎？已填寫的內容將會丟失。', '提示', {
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(cancelAction).catch(() => { });
  } else {
    cancelAction();
  }
};
/** 刪除 */
const delDrink = (drink: Drink, index: number) => {
  ElMessageBox.confirm(`您確定要刪除${drink.drinkName}嗎?`, '提示', {
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => drinksList.value.splice(index, 1))
};
</script>

<template>
  <div class="w-full px-10">
    <div class="p-5">
      <h1>Drinks</h1>
      <p class="text-sm"><strong>規則: </strong> <strong>1.</strong>可編輯所有欄位 <strong>2.</strong> 價格最低10元最高120元，調整間距為 5 元
        <strong>3.</strong>庫存最少最少為 0 最多為 100</p>
    </div>
    <el-table :data="drinksList" max-height="250" border>
      <el-table-column label="品項" width="160" align="center" fixed>
        <template #default="{ row, $index }">
          <span v-if="status === 'view' || $index !== editingIndex">{{ row.drinkName }}</span>
          <div v-else class="flex gap-1">
            <span class="text-red-500">*</span>
            <el-input v-model="editDrink.drinkName" ref="nameInputRef" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="描述" min-width="200" align="left">
        <template #default="{ row, $index }">
          <span v-if="status === 'view' || $index !== editingIndex">{{ row.content }}</span>
          <div v-else class="flex gap-1">
            <span class="text-red-500">*</span>
            <el-input v-model="editDrink.content" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="價格" width="180" align="center" sortable>
        <template #default="{ row, $index }">
          <span v-if="status === 'view' || $index !== editingIndex" class="text-base"><strong>{{ row.price
              }}</strong></span>
          <el-input-number v-else v-model="editDrink.price" :min="10" :max="120" :step="5"
            @change="handleValue($event, 'price', 10, 120)" />
        </template>
      </el-table-column>
      <el-table-column prop="inventory" label="庫存" width="200" align="center" sortable>
        <template #default="{ row, $index }">
          <span v-if="status === 'view' || $index !== editingIndex" class="text-base"><strong>{{ row.inventory
              }}</strong></span>
          <el-input-number v-else v-model="editDrink.inventory" :min="0" :max="100" :step="1"
            @change="handleValue($event, 'inventory', 0, 100)" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template #default="{ row, $index }">
          <template v-if="status === 'view'">
            <el-button @click="startEditing(row, $index)" :icon="Edit" />
            <el-button @click="delDrink(row, $index)" :icon="Delete" type="danger" plain />
          </template>
          <template v-else-if="$index === editingIndex">
            <el-button @click="handleCancel" :icon="Close" type="info" plain class="p-3 md:p-2" />
            <el-button @click="handleSave" :disabled="!valid" :icon="Check" type="success" plain class="p-3 md:p-2" />
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="startAdding" :disabled="isEditing" class="!w-100% mt-4">新增飲品項目</el-button>
  </div>
</template>
